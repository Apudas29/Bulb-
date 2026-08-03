"use client";

import { useState } from "react";

export default function BulbPage() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      <div className="flex flex-col items-center">
        {/* Wire */}
        <div className="h-40 w-1 bg-gray-500"></div>

        <button
          onClick={() => setIsOn(!isOn)}
          className="relative cursor-pointer focus:outline-none"
        >
          {/* Glow */}
          {isOn && (
            <>
              <div className="absolute inset-0 scale-[1.8] rounded-full bg-yellow-300 opacity-40 blur-[80px] animate-pulse"></div>
              <div className="absolute inset-0 scale-[2.4] rounded-full bg-yellow-100 opacity-20 blur-[150px]"></div>
            </>
          )}

          {/* Glass Bulb */}
          <div
            className={`relative h-80 w-64 overflow-hidden rounded-t-full rounded-b-[50%] border-4 transition-all duration-50 ${
              isOn
                ? "border-yellow-200 bg-gradient-to-b from-yellow-100 via-yellow-300 to-orange-400 shadow-[0_0_120px_rgba(255,230,100,0.8)]"
                : "border-gray-500 bg-gray-300"
            }`}
          >
            {/* Glass Reflection */}
            <div className="absolute left-10 top-8 h-44 w-8 rounded-full bg-white/40 blur-sm"></div>

            {/* Filament */}
            <div className="absolute left-1/2 top-40 -translate-x-1/2">
              <div
                className={`h-14 w-16 rounded-full border-[3px] ${
                  isOn ? "border-white" : "border-gray-600"
                }`}
              ></div>

              <div
                className={`mx-auto h-12 w-1.5 ${
                  isOn ? "bg-white" : "bg-gray-600"
                }`}
              ></div>
            </div>
          </div>

          {/* Bulb Base */}
          <div className="mx-auto w-32 rounded-b-2xl bg-gray-700 p-3 shadow-lg">
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((line) => (
                <div
                  key={line}
                  className="h-1.5 rounded bg-gray-500"
                ></div>
              ))}
            </div>
          </div>
        </button>

        {/* Text */}
        <h1 className="mt-10 text-5xl font-bold text-white">
          {isOn ? "💡 Bulb ON" : "💤 Bulb OFF"}
        </h1>

        <p className="mt-4 text-lg text-gray-400">
          Click the bulb or button to{" "}
          {isOn ? "switch it off" : "light it up"}
        </p>

        {/* Button */}
        {/* <button
          onClick={() => setIsOn(!isOn)}
          className={`mt-8 rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 ${
            isOn
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-yellow-400 text-black hover:bg-yellow-500"
          }`}
        >
          {isOn ? "Turn OFF" : "Turn ON"} */}
        {/* </button> */}
      </div>
    </div>
  );
}