"use client";

import { useState, useEffect } from "react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export function usePwaInstall() {
  const [isIos, setIsIos] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isDismissed, setIsDismissed] = useState(true);

  useEffect(() => {
    // Check if running in standalone mode (already installed)
    const isInStandaloneMode =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;

    setIsStandalone(isInStandaloneMode);

    // Detect iOS devices
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice =
      /iphone|ipad|ipod/.test(userAgent) ||
      (window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);

    setIsIos(isIosDevice);

    // Check if dismissed before in localStorage
    const dismissed = localStorage.getItem("pwa_install_dismissed");
    if (!isInStandaloneMode && !dismissed) {
      setIsDismissed(false);
    }

    // Capture standard PWA install prompt (Chrome / Android / Desktop)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      if (!isInStandaloneMode && !dismissed) {
        setIsDismissed(false);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const promptInstall = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === "accepted") {
        setIsStandalone(true);
        setIsDismissed(true);
      }
      setDeferredPrompt(null);
    }
  };

  const dismiss = () => {
    setIsDismissed(true);
    localStorage.setItem("pwa_install_dismissed", "true");
  };

  const resetDismiss = () => {
    setIsDismissed(false);
    localStorage.removeItem("pwa_install_dismissed");
  };

  return {
    isIos,
    isStandalone,
    canPrompt: Boolean(deferredPrompt),
    promptInstall,
    isDismissed,
    dismiss,
    resetDismiss,
  };
}
