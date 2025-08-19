import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";
export const metadata = {
  title: "گروه ساختمان سازی آجرچین",
  description: "با بیش از ۳۰ سال سابقه در ساختمان سازی",
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
