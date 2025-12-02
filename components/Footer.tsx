import React from "react";

function Footer() {
  return (
    <div className="h-[80vh] relative flex flex-col justify-end bg-linear-to-b from-white/70 to-white/30">
      <div className="absolute inset-0 z-10 p-5 flex items-center justify-center pointer-events-none">
        <div className="text-sm md:text-lg lg:text-2xl font-semibold text-center">✨Eventhough my love language might be changed, my love for you never changed baby✨</div>
      </div>
      <div className="flex justify-between px-2 py-3 text-sm md:text-base">
        <div className="">All Rights Reserved © 2024</div>
        <div className="">
          Developed by <a className="font-semibold hover:underline hover:text-amber-700" href="https://www.kaungkhantkyaw.online/">Koko</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
