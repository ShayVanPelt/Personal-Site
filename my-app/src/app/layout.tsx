import type { Metadata } from "next";
import { IBM_Plex_Sans, Syne } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Shay Van Pelt",
  description:
    "Portfolio of Shay Van Pelt — Software Engineering student at UVic. Full-stack development, QA automation, and personal projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          ibmPlexSans.variable,
          syne.variable,
          "font-sans antialiased"
        )}
      >
        <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-pattern bg-grid opacity-40" />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(147,51,234,0.15),transparent)]" />
        {children}
      </body>
    </html>
  );
}
