"use client";
import React from "react";

function Enter() {
    const [hide, setHide] = React.useState(false);
  const handleClick = () => {
    const audio = new Audio("/AboutYou.mp3");
    audio.loop = true;
    setHide(true);
    audio.play();
  };

  return (
    <>
      <div className={`fixed inset-0 z-999 flex flex-col items-center justify-center text-center gap-5 bg-rose-600 text-white transition-opacity duration-3000 ease-in ${hide ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="text-2xl md:text-4xl lg:text-5xl">Baby, I made this for you</div>
        <button onClick={handleClick} className="bg-white py-2 px-5 text-rose-600 rounded-full font-semibold text-lg md:text-2xl lg:text-4xl cursor-pointer border-2 border-white hover:bg-rose-600 hover:text-white duration-200">Enter</button>
      </div>
    </>
  );
}

export default Enter;
