"use client";
import React from "react";

function Letter() {
  const [revealed, setRevealed] = React.useState(false);

  return (
    <div className="bg-white/70 text-neutral-800 px-2">
      <div className="py-10 md:py-20">
        <div className="text-3xl md:text-4xl lg:text-5xl text-center font-serif">
          𝒟𝑜 𝓎𝑜𝓊 𝓉𝒽𝒾𝓃𝓀 𝐼 𝒽𝒶𝓋𝑒 𝒻𝑜𝓇𝑔𝑜𝓉𝓉𝑒𝓃? 🙄
        </div>

        <div className="pt-2 md:pt-5 lg:pt-6 text-xl md:text-2xl lg:text-3xl text-center opacity-80">
          𝐻𝑒𝓇𝑒 𝒾𝓈 𝒶 𝑔𝒾𝒻𝓉 𝒻𝑜𝓇 𝓎♡𝓊
        </div>
      </div>

      <div
        className="max-w-sm mx-auto md:mt-8 lg:mt-10 rounded-3xl overflow-hidden relative group cursor-pointer"
        onClick={() => setRevealed(true)}
      >
        {/* Actual image (hidden until revealed) */}
        <img
          src="img/gift.jpeg"
          alt="gift"
          className={`transition-all duration-700 ${
            revealed ? "blur-0 scale-100" : "blur-xl scale-105"
          }`}
        />
        <div className="bg-black text-white p-5">
          <div className="">No Delivary Available 🙂‍↔</div>
          <div className="text-xs">Come and pick it up 😏</div>
        </div>

        {/* Overlay layer */}
        {!revealed && (
          <div className="absolute z-20 inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-500">
            <p className="text-white text-lg md:text-xl font-medium tracking-wide">
              ✨ Click to reveal ✨
            </p>
            <p className="text-white/80 text-sm mt-2">
              A little surprise for your heart 💖
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Letter;
