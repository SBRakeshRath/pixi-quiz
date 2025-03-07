import { Metadata } from "next";
import { Roboto } from "next/font/google";
export async function generateMetadata(): Promise<Metadata> {
  const title = "Portfolio of SBRR";

  const description = "Portfolio of a software engineer";

  return {
    metadataBase: new URL("https://pixismith.com"),
    title,
    description,
    // themeColor: "black",
    // openGraph: {
    //   title,
    //   description,
    //   url: "https://pixismith.com",
    //   images: [
    //     {
    //       url: "/openGraph.jpg",
    //       secureUrl: "/openGraph.jpg",
    //       width: 1200,
    //       height: 630,
    //       alt: "Preview of SBRR Portfolio",
    //     },
    //   ],
    //   type: "website",
    //   siteName: "S B Rakesh Rath | Portfolio",
    // },
  };
}

import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700", "900"],
  // style: "italic",
  subsets: ["latin"],
  variable: "--font-roboto",
  // display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}