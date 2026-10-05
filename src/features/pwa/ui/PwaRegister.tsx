"use client";

import { useEffect } from "react";

export function PwaRegister() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }

    if (process.env.NODE_ENV === "development") {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
          registration.unregister();
        }
      });
      if ("caches" in window) {
        window.caches.keys().then((keys) => {
          for (const key of keys) {
            window.caches.delete(key);
          }
        });
      }
      return;
    }

    const registerSW = () => {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .then((registration) => {
          // Check for service worker updates periodically
          registration.update().catch(() => {});
        })
        .catch((error) => {
          console.warn("[PWA] ServiceWorker registration notice:", error);
        });
    };

    // Ensure registration runs whether document is already loaded or still loading
    if (document.readyState === "complete") {
      registerSW();
    } else {
      window.addEventListener("load", registerSW, { once: true });
      return () => window.removeEventListener("load", registerSW);
    }
  }, []);

  return null;
}
