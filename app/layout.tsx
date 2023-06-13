
// import { Inter } from 'next/font/google';

import Layout from "./components/layout/Layout";
import "./globals.css";

export const metadata = {
  title: "Admin - Zayb Resturant",
  description: "Home of Food for Gents.",
};

export let http = "";
if (process.env.NODE_ENV === "production") {
  http = "https";
} else {
  http = "http";
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 ">
          {/* @ts-expect-error Async Server Component */}
          <Layout>
            <>{children}</>
          </Layout>
      </body>
    </html>
  );
}
