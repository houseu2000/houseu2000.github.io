import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://houseu2000.github.io"),
  title: "侯佳乐 | Jiale Hou — 线上简历",
  description:
    "侯佳乐，2027 届清华大学工科博士研究生。研究聚焦计算机视觉、视觉智能体与基础设施感知。教育背景、科研经历、实习及项目、代表性论文与荣誉奖励。",
  openGraph: {
    title: "侯佳乐 | Jiale Hou — 线上简历",
    description:
      "Computer vision, visual agents and infrastructure sensing. Ph.D. candidate at Tsinghua University, graduating in 2027.",
    url: "https://houseu2000.github.io",
    siteName: "Jiale Hou / 侯佳乐",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1740,
        height: 910,
        alt: "Jiale Hou academic homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "侯佳乐 | Jiale Hou — 线上简历",
    description: "Computer vision, visual agents and infrastructure sensing.",
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
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
