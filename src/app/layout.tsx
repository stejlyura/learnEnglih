import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppHeader } from "@/widgets/app-header";
import { AppFooter } from "@/widgets/app-footer";
import { ReadingProgress } from "@/widgets/reading-progress";
import { PwaRegister, IosInstallBanner } from "@/features/pwa";

export const viewport: Viewport = {
  themeColor: "#080C14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Fluency Architecture: Разговорный Английский через Лексические Чанки (B2 → C1)",
  description: "Как говорить готовыми речевыми блоками без зависаний, преодолеть плато B2, обходить забытые слова и звучать естественно как носитель.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Fluency English",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/img/favicon.svg", type: "image/svg+xml" },
      { url: "/img/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/img/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Fluency English" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Fluency English" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#080C14] text-slate-200 antialiased flex flex-col selection:bg-indigo-500 selection:text-white"
      >
        <PwaRegister />
        <ReadingProgress />
        <AppHeader />
        <main className="flex-1 w-full">{children}</main>
        <AppFooter />
        <IosInstallBanner />
      </body>
    </html>
  );
}

