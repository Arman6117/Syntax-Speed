"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const keysLayout = [
  [
    "Esc",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
  ],
  [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Backspace",
  ],
  ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
  ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
  ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift"],
  ["Ctrl", "Win", "Alt", "Space", "Alt", "Ctrl"],
];

const InteractiveKeyboard = () => {
  const [pressedKey, setPressedKey] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      let key = e.key;
      if (key === " ") key = "Space";
      if (key === "Escape") key = "Esc";
      if (key === "Control") key = "Ctrl";

      setPressedKey(key.toUpperCase());
    };
    const handleKeyUp = () => {
      setPressedKey("");
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="select-none mt-5">
      {keysLayout.map((row, i) => (
        <div className="flex justify-center mb-5 space-x-1" key={i}>
          {row.map((key, index) => {
            const isPressed = key.toUpperCase() === pressedKey;
            return (
              <div
                key={index}
                className={cn(
                  "px-6 py-2 bg-white-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border text-white border-gray-100 text-center font-semibold",
                  key === "Space" ? "w-[400px]" : "w-auto" , isPressed && 'bg-white/30'
                )}
              >
                {key}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default InteractiveKeyboard;
