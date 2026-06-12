import "./globals.css";

const siteUrl = "https://guangzhou-opc-site.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "广州类智能体科技有限公司｜AI+OPC青年创业生态平台",
  description:
    "广州类智能体科技有限公司致力于帮助高校毕业生和年轻创业者进入AI领域，通过真实项目、智能体工具和商业实践，建立职业能力、个人事业与OPC创业路径。",
  keywords: [
    "广州OPC",
    "AI创业",
    "高校毕业生创业",
    "AI智能体",
    "一人公司",
    "人工智能创业",
    "AI电商",
    "青年就业",
    "广州人工智能",
    "OPC社区",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "广州类智能体科技有限公司",
    title: "广州类智能体科技有限公司｜AI+OPC青年创业生态平台",
    description:
      "通过真实项目、智能体工具与商业实践，帮助年轻人建立AI职业能力、个人事业与OPC创业路径。",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "广州类智能体科技有限公司",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "广州类智能体科技有限公司｜AI+OPC青年创业生态平台",
    description:
      "连接高校毕业生、年轻创业者、企业项目与AI智能体工具的OPC生态平台。",
    images: ["/logo.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
