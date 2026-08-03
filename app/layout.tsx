import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://houseu2000.github.io"),
  title: "侯佳乐 | Jiale Hou — Academic Homepage",
  description:
    "Academic homepage of Jiale Hou, Ph.D. researcher in civil engineering at Tsinghua University, focusing on structural health monitoring, computer vision, and disaster mitigation.",
  openGraph: {
    title: "侯佳乐 | Jiale Hou — Academic Homepage",
    description:
      "Civil engineering researcher at Tsinghua University working on vision-based structural sensing and bridge structural health monitoring.",
    url: "https://houseu2000.github.io",
    siteName: "Jiale Hou / 侯佳乐",
    type: "website",
    images: [{ url: "/og.png", width: 1740, height: 910, alt: "Jiale Hou academic homepage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "侯佳乐 | Jiale Hou — Academic Homepage",
    description: "Vision-based structural sensing and bridge structural health monitoring.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
