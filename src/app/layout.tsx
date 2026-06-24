import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aleo Hackathon | Build Programmable Privacy",
  description:
    "Aleo x OpenBuild Hackathon 面向亚太地区开发者开放，设置 5 大赛道与 5,000 美元奖金池，寻找下一代隐私应用 Builder。",
  keywords: [
    "Aleo",
    "Hackathon",
    "OpenBuild",
    "Zero Knowledge",
    "Programmable Privacy",
    "隐私计算",
    "Web3",
  ],
  openGraph: {
    title: "Aleo Hackathon 正式启动",
    description:
      "5 大赛道、5 位优胜者、5,000 美元奖金池。加入 Aleo Hackathon，构建下一代可编程隐私应用。",
    type: "website",
    locale: "zh_CN",
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
