import "@/app/globals.css";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "F8bank - Your Digital Banking Experience",
  description: "F8bank brings next generation banking to your Apple Watch. Request early access now.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
