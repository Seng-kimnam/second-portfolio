import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Science_Gothic } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const scienceGothic = Science_Gothic({
  subsets: ["latin"],
  variable: "--font-science-gothic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seng Kimnam - Portfolio",
  description:
    "Showcase of my professional work, skills, and experience. Discover how I create stunning digital experiences.",
  icons: {
    icon: [
      {
        url: "/my_pic.jpg",
        type: "image/svg+xml",
      },
      {
        url: "/my_pic.jpg",
        type: "image/svg+xml",
      },
      {
        url: "/my_pic.jpg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${scienceGothic.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
