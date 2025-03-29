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
       {/* Header with 2px Margins Left & Right - Placed Outside the Main Wrapper */}
       <header className="flex justify-between items-center py-2 mx-[10px]">
        <div className="text-white text-2xl font-bold">F8bank</div>
        <Button
          variant="outline"
          className="bg-[#0D1B2A] hover:bg-[#1A2A3A] text-[#D9D9D9] rounded-xl border-none px-8 py-2 shadow-md transition-all duration-300 hover:shadow-lg"
        >
          Contact
        </Button>
      </header>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
