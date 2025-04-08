"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CustomWatch } from "@/components/CustomWatch";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`min-h-screen w-full relative overflow-hidden ${outfit.variable} font-sans`}>
      {/* Loader */}
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-[#0D1B2A]">
          <div className="w-16 h-16 border-4 border-t-[#00B08F] border-[#3A506B] rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {/* Header */}
          <header className="flex flex-row justify-between items-center py-4 mt-6 px-6 sm:px-12 md:px-[100px] w-full">
            <div className="text-white text-3xl sm:text-4xl font-normal">F8bank</div>
            <Button
              variant="outline"
              className="bg-[#00B08F] rounded-full text-[18px] sm:text-[20px] text-[#000000] border-none px-6 sm:px-8 py-4 sm:py-6 hover:bg-[#34A66A] text-black transition-all duration-300 hover:shadow-lg hover:shadow-[#2A915A]/20"
            >
              Contact
            </Button>
          </header>

          {/* Content Container */}
          <div className="container mx-auto px-4 py-8 relative z-10 max-w-6xl">
            <main className="flex flex-col items-center mt-8 sm:mt-16 md:mt-24 text-center">
              {/* Title */}
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-[96px] font-extrabold text-white mb-4 tracking-tight ${outfit.className} animate-pulse-slow`}>
                Your F8 Awaits...
              </h1>

              {/* Watch Image */}
              <div className="transition-all sm:-mt-8 lg:-mt-[100px] md:-mt-[100px] duration-700 scale-105 hover:scale-[1.12] relative">
                <CustomWatch />
              </div>

              {/* Email Form */}
              <div className="w-full flex justify-center px-4 sm:mt-10 lg:-mt-[10px]">
                <form className="relative w-full max-w-[680px] mx-auto">
                  <div className="relative w-full">
                    <Input
                      type="email"
                      placeholder="Enter your email address to request early access"
                      className="bg-[#0D1B2A] border-[#3A506B] text-[18px] sm:text-[20px] text-[#D9D9D9] h-14 rounded-full py-4 sm:py-6 px-4 sm:px-6 w-full shadow-[0_0_10px_rgba(58,80,107,0.3)] focus:ring-2 focus:ring-[#5e2799]/50 transition-all duration-300 placeholder:text-[16px] sm:placeholder:text-[20px] placeholder:pl-4 sm:placeholder:pl-[80px] placeholder:font-extralight placeholder:text-[#B0B0B0]"
                    />
                    <Button
                      type="submit"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#00B08F] hover:bg-[#34A66A] text-black text-[18px] sm:text-[20px] px-6 sm:px-8 h-12 sm:h-14 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#2A915A]/20"
                    >
                      Sign Up
                    </Button>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </>
      )}
    </div>
  );
}
