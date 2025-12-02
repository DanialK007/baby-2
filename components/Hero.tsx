"use client";
import React, { useState, useEffect } from "react";

function Hero() {
  const [time, setTime] = React.useState("");
  const [day, setDay] = React.useState(0);
  const [hour, setHour] = React.useState(0);
  const [minute, setMinute] = React.useState(0);
  const [second, setSecond] = React.useState(0);

  React.useEffect(() => {
    const start = new Date("2024-12-02T00:00:00");
    const update = () => {
      const now = new Date();
      const diff = now.getTime() - start.getTime();

      const sec = Math.floor(diff / 1000) % 60;
      const min = Math.floor(diff / (1000 * 60)) % 60;
      const hr = Math.floor(diff / (1000 * 60 * 60)) % 24;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      setTime(`${days}d ${hr}h ${min}m ${sec}s`);
      setDay(days);
      setHour(hr);
      setMinute(min);
      setSecond(sec);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-[95vh] md:h-screen relative">
      <div className="absolute inset-0 z-20">
        <div className="relative h-full flex flex-col gap-10 items-center justify-between px-10 pt-24 pb-16 md:pt-32 lg:pb-32">
          <div className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
            🎀 𝐻𝒶𝓅𝓅𝓎 𝒜𝓃𝓃𝒾𝓋𝑒𝓇𝓈𝒶𝓇𝓎 🎀
          </div>
          <div className="">
            <div className="text-2xl text-center p-2 text-rose-600">𝕋𝕠𝕘𝕖𝕥𝕙𝕖𝕣 𝔽𝕠𝕣</div>
            <div className="text-sm md:text-2xl lg:text-3xl flex gap-2 md:gap-4">
              <div className="bg-rose-500/70 backdrop-blur-sm text-white py-2 px-3 rounded-xl">
                {day}D
              </div>
              <div className="bg-rose-500/70 backdrop-blur-sm text-white py-2 px-3 rounded-xl">
                {hour}Hr
              </div>
              <div className="bg-rose-500/70 backdrop-blur-sm text-white py-2 px-3 rounded-xl">
                {minute}Min
              </div>
              <div className="bg-rose-500/70 backdrop-blur-sm text-white py-2 px-3 rounded-xl">
                {second}s
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-10 bg-linear-to-t from-white/70 via-white/30"></div>
    </div>
  );
}

export default Hero;
