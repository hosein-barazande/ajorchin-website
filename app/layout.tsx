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
    <html lang="en">
      <body className="body">
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
