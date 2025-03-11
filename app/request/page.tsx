"use client";

import { useState, useRef } from "react";
import Confetti from "react-confetti";

export default function PersonalRequest() {
  const [input, setInput] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [noClicks, setNoClicks] = useState(0);
  const [showNoButton, setShowNoButton] = useState(true);
  const [showText, setShowText] = useState(true);
  const [noButtonSize, setNoButtonSize] = useState(16); // Initial font size
  const noButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    if (value.toLowerCase() === "melisa") {
      setIsUnlocked(true);
    }
  };

  const moveNoButton = () => {
    setNoClicks((prev) => prev + 1);
    setNoButtonSize((prev) => Math.max(prev - 2, 8)); // Shrink slightly but not too much
    if (noClicks === 0) setShowText(false); // Remove text after first click

    if (noClicks >= 3) {
      setShowNoButton(false);
      return;
    }

    if (noButtonRef.current) {
      const maxX = window.innerWidth - 120; // Keep within screen width
      const maxY = Math.min(500, window.innerHeight - 100); // Keep within 800px height or screen height

      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      noButtonRef.current.style.position = "absolute";
      noButtonRef.current.style.left = `${x}px`;
      noButtonRef.current.style.top = `${y}px`;
      noButtonRef.current.style.transition = "top 0.3s ease-in-out, left 0.3s ease-in-out";
    }
  };

  const celebrate = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white relative overflow-hidden">
      {showConfetti && <Confetti />}

      {!isUnlocked ? (
        <div className="p-6 bg-zinc-950 text-center rounded-lg shadow-md">
          <p className="mb-4 text-lg">may I get your name please</p>
          <input
            type="text"
            value={input}
            onChange={handleInput}
            className="p-2 rounded-md text-black"
            autoFocus
          />
        </div>
      ) : (
        <div className="p-6 bg-zinc-900 rounded-lg text-center relative mx-auto py-3 lg:py-4 border rounded-t-lg w-11/12 md:w-3/4">
          <p className="text-xs mb-4">
            Yuuhuu Cinucen Hanım, rond de pot draaien doen we niet graag hé + moest creatief worden, dus hierbij:
          </p>
          <p className="text-xs mb-4 font-bold">'may Melih Demirel get to know you?'</p>

          <button
            className="p-4 bg-green-500 text-xl rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-green-400 animate-pulse"
            onClick={celebrate}
          >
            HELL YEA
          </button>

          {showNoButton && (
            <button
              ref={noButtonRef}
              className="ml-4 bg-red-500 rounded-lg absolute transition-all duration-300 ease-in-out"
              onClick={moveNoButton}
              style={{ fontSize: `${noButtonSize}px`, padding: `${noButtonSize}px` }}
            >
              no
            </button>
          )}

          {showText && <p className="text-xs mt-4 mb-4">P.S. Hele bi NO bas, bakayım ne oluyor!!!!!</p>}
        </div>
      )}
    </div>
  );
}
