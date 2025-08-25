import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";
export const metadata = {
  title: "گروه ساختمان سازی آجرچین",
  description: "با بیش از ۳۰ سال سابقه در ساختمان سازی",
  verification: {
    google: "IxpzZQDbeQ8t_EJXY5c4t8C5yjtmgIpU9-YV1Q4vDQs",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <head>
      <meta name="msvalidate.01" content="B30307234E20D7AC9B11D5C7B12168EB" />
      </head>
      <body className="body">
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
