import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CustomWatch } from "@/components/CustomWatch";
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-outfit',
});

export default function Home() {
  return (
    <div className={`min-h-screen w-full relative overflow-hidden ${outfit.variable} font-sans`}>
      {/* Floating Particles/Light Effects */}
      {/* <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-white opacity-50 animate-pulse-slow"></div>
      <div className="absolute top-3/4 left-3/4 w-1 h-1 rounded-full bg-white opacity-30 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-2 h-2 rounded-full bg-white opacity-40 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/6 left-2/3 w-1 h-1 rounded-full bg-white opacity-20 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div> */}

      {/* Large Gradient Orbs */}
      {/* <div className="absolute top-[-10%] right-[-5%] w-[30vw] h-[30vw] rounded-full bg-[#2271c3]/20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-[-15%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#5e2799]/15 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div> */}
    {/* Header with 2px Margins Left & Right - Placed Outside the Main Wrapper */}
      <header className="flex justify-between items-center py-2 mt-[57px] mx-[100px]">
        <div className="text-white text-2xl font-normal m-4">F8bank</div>
        <Button
          variant="outline"
          className="bg-[#00B08F] rounded-full text-[#000000]  border-none px-8 py-6 m-4 hover:bg-[#34A66A] text-black transition-all duration-300 hover:shadow-lg hover:shadow-[#2A915A]/20"
        >
          Contact
        </Button>
      </header>
      {/* Content Container */}
      <div className="container mx-auto px-4 py-8 relative z-10 max-w-6xl">

        {/* Main Content */}
        <main className="flex flex-col items-center mt-16 md:mt-24 text-center">
          <h1 className={`text-5xl md:text-6xl font-extrabold text-white mb-0 tracking-tight ${outfit.className} animate-pulse-slow`}>
            Your F8 Awaits...
          </h1>

          {/* Watch Image with Animation */}
          <div className="transition-all -mt-20 duration-700 hover:scale-105 mb-5 md:mb-5 relative">
            {/* Reflection/Light Effect */}
            {/* <div className="absolute top-0 left-0  w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-gradient"></div> */}
            <CustomWatch />
          </div>

          {/* Email Form */}
          <div className="w-full max-w-md relative group">
            {/* Form Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#5e2799]/30 to-[#2271c3]/30 rounded-full blur-md group-hover:opacity-100 opacity-75 transition duration-1000 group-hover:duration-200 animate-gradient"></div>

            <form className="relative flex items-center">
              <div className="relative w-full">
                <Input
                  type="email"
                  placeholder="Enter your email address to request early access"
                  className="bg-[#0D1B2A] border-[#3A506B] text-[#D9D9D9] h-14 rounded-full py-6 px-6 w-full shadow-[0_0_10px_rgba(58,80,107,0.3)] focus:ring-2 focus:ring-[#5e2799]/50 transition-all duration-300"
                />
              </div>
              <Button
                type="submit"
                className="absolute right-0 h-14 px-8 rounded-full bg-[#00B08F] hover:bg-[#34A66A] text-black transition-all duration-300 hover:shadow-lg hover:shadow-[#2A915A]/20"
              >
                Sign Up
              </Button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
