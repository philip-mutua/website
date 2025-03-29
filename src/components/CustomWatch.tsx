import React from 'react';

export function CustomWatch() {
  return (
    <div className="relative w-[100%] h-[100%]">
      {/* The Watch Screen */}
      <div className="margin-top-[0px]">
            <img alt="watch image" src="images/freepik__background__42092 1.png"></img>
      </div>

      {/* Pulsing Glow Behind the Watch */}
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[170px] h-[200px] rounded-[30px] bg-[#5e2799]/10 blur-xl animate-pulse-slow"></div>

      {/* Reflection Effect */}
      <div className="absolute top-[10%] left-[30%] w-[100px] h-[5px] bg-white/10 rounded-full blur-sm transform rotate-[30deg] animate-pulse-slow"></div>
    </div>
  );
}
