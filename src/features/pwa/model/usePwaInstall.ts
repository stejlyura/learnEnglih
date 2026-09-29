"use client";

import { useState, useEffect, useSyncExternalStore } from "react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

function subscribeStandalone(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(display-mode: standalone)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getStandalone() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (window.navigator as unknown as { standalone?: boolean }).standalone === true
  );
}

function getIsIos() {
  if (typeof window === "undefined") return false;
  const userAgent = window.navigator.userAgent.toLowerCase();
  return (
    /iphone|ipad|ipod/.test(userAgent) ||
    (window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1)
  );
}

const dismissedListeners = new Set<() => void>();
function notifyDismissed() {
  dismissedListeners.forEach((l) => l());
}

function subscribeDismissed(callback: () => void) {
  dismissedListeners.add(callback);
  if (typeof window !== "undefined") {
    window.addEventListener("storage", callback);
  }
  return () => {
    dismissedListeners.delete(callback);
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", callback);
    }
  };
}

function getIsDismissed() {
  if (typeof window === "undefined") return true;
  return Boolean(localStorage.getItem("pwa_install_dismissed"));
}

const emptySubscribe = () => () => {};

export function usePwaInstall() {
  const isIos = useSyncExternalStore(emptySubscribe, getIsIos, () => false);
  const isStandalone = useSyncExternalStore(subscribeStandalone, getStandalone, () => false);
  const isDismissed = useSyncExternalStore(subscribeDismissed, getIsDismissed, () => true);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    // Capture standard PWA install prompt (Chrome / Android / Desktop)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
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
        localStorage.setItem("pwa_install_dismissed", "true");
        notifyDismissed();
      }
      setDeferredPrompt(null);
    }
  };

  const dismiss = () => {
    localStorage.setItem("pwa_install_dismissed", "true");
    notifyDismissed();
  };

  const resetDismiss = () => {
    localStorage.removeItem("pwa_install_dismissed");
    notifyDismissed();
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
