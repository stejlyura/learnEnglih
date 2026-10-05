import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AppHeader } from "@/widgets/app-header";
import { AppFooter } from "@/widgets/app-footer";
import { ReadingProgress } from "@/widgets/reading-progress";
import { ScrollToTop } from "@/shared/ui";
import { PwaRegister, IosInstallBanner } from "@/features/pwa";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080C14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Fluency Architecture: Разговорный Английский через Лексические Чанки (B2 → C1)",
  description: "Как говорить готовыми речевыми блоками без зависаний, преодолеть плато B2, обходить забытые слова и звучать естественно как носитель.",
  openGraph: {
    title: "Fluency Architecture: Разговорный Английский через Лексические Чанки (B2 → C1)",
    description: "Как говорить готовыми речевыми блоками без зависаний, преодолеть плато B2, обходить забытые слова и звучать естественно как носитель.",
    type: "website",
  },
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
    <html
      lang="ru"
      className={`${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} ${inter.className}`}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#080C14] text-slate-200 antialiased flex flex-col selection:bg-indigo-500 selection:text-white"
      >
        <PwaRegister />
        <ReadingProgress />
        <AppHeader />
        <main className="flex-1 w-full">{children}</main>
        <AppFooter />
        <ScrollToTop />
        <IosInstallBanner />
      </body>
    </html>
  );
}

