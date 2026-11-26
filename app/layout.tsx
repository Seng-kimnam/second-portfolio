import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Science_Gothic } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { PageTransition } from "@/components/ui/page-transition";
import "@/app/globals.css";

const scienceGothic = Science_Gothic({
  subsets: ["latin"],
  variable: "--font-science-gothic",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Seng Kimnam - Portfolio",
    template: "%s | Seng Kimnam",
  },
  description:
    "Showcase of my professional work, skills, and experience. Discover how I create stunning digital experiences.",
  openGraph: {
    title: "Seng Kimnam - Portfolio",
    description:
      "Showcase of my professional work, skills, and experience. Discover how I create stunning digital experiences.",
    type: "website",
  },
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
    { media: "(prefers-color-scheme: light)", color: "#eef2ff" },
    { media: "(prefers-color-scheme: dark)", color: "#161A3D" },
  ],
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={scienceGothic.variable} suppressHydrationWarning>
      <body className="antialiased text-foreground" suppressHydrationWarning>
        <ThemeProvider>
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
