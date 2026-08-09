"use client";

import { useState, useRef } from "react";

export default function BulbPage() {
  const [isOn, setIsOn] = useState(false);
  const [color, setColor] = useState("amber");
  const [scare, setScare] = useState(false);

  const clickCount = useRef(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const colors = [
    "amber",
    "blue",
    "purple",
    "red",
    "green",
    "pink",
    "orange",
    "cyan",
    "lime",
  ];

  const changeColor = () => {
    const current = colors.indexOf(color);
    const next = (current + 1) % colors.length;

    setColor(colors[next]);
    setIsOn(true);
  };

  const showScare = () => {
    setScare(true);

    setTimeout(() => {
      setScare(false);
    }, 1500);
  };

  const handleClick = () => {
    clickCount.current++;

    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      if (clickCount.current === 1) {
        setIsOn((prev) => !prev);
      } else if (clickCount.current === 2) {
        changeColor();
      } else if (clickCount.current >= 3) {
        showScare();
      }

      clickCount.current = 0;
    }, 300);
  };

  const bulbStyles: Record<string, string> = {
    amber:
      "border-yellow-200 bg-gradient-to-b from-yellow-100 via-yellow-300 to-yellow-500 shadow-[0_0_200px_rgba(255,220,100,0.9)]",

    blue:
      "border-blue-200 bg-gradient-to-b from-blue-100 via-blue-300 to-cyan-400 shadow-[0_0_200px_rgba(120,180,255,0.9)]",

    purple:
      "border-purple-200 bg-gradient-to-b from-purple-100 via-purple-300 to-pink-400 shadow-[0_0_200px_rgba(220,120,255,0.9)]",

    red:
      "border-red-200 bg-gradient-to-b from-red-100 via-red-300 to-red-500 shadow-[0_0_200px_rgba(255,80,80,0.9)]",

    green:
      "border-green-200 bg-gradient-to-b from-green-100 via-green-300 to-green-500 shadow-[0_0_200px_rgba(80,255,120,0.9)]",

    pink:
      "border-pink-200 bg-gradient-to-b from-pink-100 via-pink-300 to-pink-500 shadow-[0_0_200px_rgba(255,120,200,0.9)]",

    orange:
      "border-orange-200 bg-gradient-to-b from-orange-100 via-orange-300 to-orange-500 shadow-[0_0_200px_rgba(255,180,80,0.9)]",

    cyan:
      "border-cyan-200 bg-gradient-to-b from-cyan-100 via-cyan-300 to-cyan-500 shadow-[0_0_200px_rgba(80,255,255,0.9)]",

    lime:
      "border-lime-200 bg-gradient-to-b from-lime-100 via-lime-300 to-lime-500 shadow-[0_0_200px_rgba(180,255,80,0.9)]",
  };

  const bulbStyle = isOn
    ? bulbStyles[color]
    : "border-gray-500 bg-gray-300";

  return (
    <div className="relative flex min-h-screen w-full overflow-x-hidden flex-col items-center justify-center bg-gradient-to-b from-gray-950 to-black px-4 py-10">
      {scare && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 text-6xl sm:text-8xl font-bold text-red-500">
          👻 BOO!
        </div>
      )}

      <div className="flex flex-col items-center">
        {/* Wire */}
        <div className="h-24 sm:h-32 w-[4px] bg-gray-500"></div>

        <button
          onClick={handleClick}
          className="relative cursor-pointer focus:outline-none"
        >
          {isOn && (
            <>
              <div className="absolute inset-0 scale-[1.4] rounded-full bg-white/30 blur-[60px]"></div>
              <div className="absolute inset-0 scale-[1.8] rounded-full bg-white/20 blur-[120px]"></div>
            </>
          )}

          {/* Bulb */}
          <div
            className={`relative h-64 w-64 sm:h-80 sm:w-80 overflow-hidden rounded-full border-4 transition-all duration-300 ${bulbStyle}`}
          >
            {/* Reflection */}
            <div className="absolute left-10 top-8 h-40 w-8 rounded-full bg-white/30 blur-md sm:left-16 sm:top-10 sm:h-52 sm:w-10"></div>

            {/* Filament */}
            <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2">
              <div className="flex gap-12 sm:gap-20">
                <div className="h-20 sm:h-28 w-[2px] bg-gray-700"></div>
                <div className="h-20 sm:h-28 w-[2px] bg-gray-700"></div>
              </div>

              <div
                className={`absolute left-1/2 top-0 -translate-x-1/2 text-xl sm:text-3xl font-bold ${
                  isOn ? "text-white" : "text-gray-600"
                }`}
              >
                ~~~~~
              </div>
            </div>
          </div>

          {/* Neck */}
          <div
            className={`mx-auto h-16 w-20 sm:h-20 sm:w-24 border-x-4 border-b-4 ${
              isOn
                ? "border-yellow-200 bg-yellow-300"
                : "border-gray-500 bg-gray-300"
            }`}
          ></div>

          {/* Base */}
          <div className="mx-auto w-24 sm:w-32 rounded-b-xl bg-gray-700 p-3 shadow-xl">
            <div className="space-y-2">
              {[1, 2, 3, 4, 5, 6].map((line) => (
                <div
                  key={line}
                  className="h-1 rounded-full bg-gray-500"
                ></div>
              ))}
            </div>
          </div>
        </button>

        <h1 className="mt-8 text-center text-2xl sm:text-4xl font-bold text-white">
          {isOn ? "💡 Bulb ON" : "🌙 Bulb OFF"}
        </h1>

        <p className="mt-4 text-base sm:text-xl text-white capitalize">
          Current Color: {color}
        </p>

        <p className="mt-6 text-center text-sm sm:text-lg text-gray-400">
          Single Click → ON / OFF
          <br />
          Double Click → Change Color
          <br />
          Triple Click → 👻 BOO!
        </p>
      </div>
    </div>
  );
}