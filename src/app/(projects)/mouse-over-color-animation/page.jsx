"use client";
import { useState } from "react";

function MouseOverColorAnimation() {
  const [color, setColor] = useState("hover:bg-lime-600");

  const colorArray = [
    "hover:bg-lime-600",
    "hover:bg-red-600",
    "hover:bg-blue-600",
    "hover:bg-yellow-600",
    "hover:bg-pink-600",
    "hover:bg-violet-600,",
    "hover:bg-fuchsia-600",
    "hover:bg-rose600",
  ];

  function changeColor() {
    setColor(colorArray[Math.floor(Math.random() * colorArray.length)]);
  }

  return (
    <>
      <div className="h-screen w-screen bg-gray-700 flex flex-col gap-6 justify-center items-center">
        <div className="grid grid-cols-16 gap-0.5">
          {Array.from({ length: 240 }).map((index) => {
            return (
              <div
                key={index}
                onFocus={() => {}}
                onMouseOver={changeColor}
                className={`size-6 bg-gray-400 ${color} delay-[1000ms] duration-500 hover:delay-0 hover:duration-0`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MouseOverColorAnimation;
