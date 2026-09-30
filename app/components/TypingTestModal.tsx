"use client";

import { useState, useEffect, useRef } from "react";
import { X, Keyboard, RotateCcw, Trophy } from "lucide-react";

const PHRASES = [
  "Debugging is like being the detective in a crime movie where you are also the murderer.",
  "I don't need to test my code, I just write it perfectly the first time. (Said no developer ever.)",
  "A SQL query goes into a bar, walks up to two tables and asks: 'Can I join you?'",
  "My code doesn't work, I have no idea why. My code works, I have no idea why.",
  "There are 10 types of people in the world: those who understand binary, and those who don't.",
  "Copying from StackOverflow is an essential developer skill. It's not plagiarizing, it's called code reuse.",
  "I will fix it later. This is the biggest lie in software engineering history.",
  "To understand recursion, one must first understand recursion.",
  "Why do Java developers wear glasses? Because they don't C#."
];

const FAKE_LEADERBOARD = [
  { name: "10x_Engineer", wpm: 165 },
  { name: "StackOverflow_God", wpm: 142 },
  { name: "ChatGPT", wpm: 120 },
  { name: "Senior_Dev_Bob", wpm: 95 },
  { name: "Intern_Timmy", wpm: 45 },
];

export default function TypingTestModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [typed, setTyped] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [phrase, setPhrase] = useState(PHRASES[0]);
  const [highScore, setHighScore] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load high score from local storage
  useEffect(() => {
    const saved = localStorage.getItem("czar_wpm_highscore");
    if (saved) setHighScore(parseInt(saved, 10));
  }, []);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "j") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const resetGame = () => {
    setTyped("");
    setStartTime(null);
    setWpm(0);
    setIsFinished(false);
    // Pick a new random phrase
    const nextPhrase = PHRASES[Math.floor(Math.random() * PHRASES.length)];
    setPhrase(nextPhrase);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  useEffect(() => {
    if (isOpen) {
      resetGame();
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isFinished) return;
    
    const value = e.target.value;
    
    // Prevent typing beyond the phrase length
    if (value.length > phrase.length) return;

    if (!startTime && value.length > 0) {
      setStartTime(Date.now());
    }
    
    setTyped(value);

    // Check if fully finished and correct
    if (value === phrase) {
      setIsFinished(true);
      if (startTime) {
        const timeMinutes = (Date.now() - startTime) / 60000;
        const words = phrase.split(" ").length;
        const finalWpm = Math.round(words / timeMinutes);
        setWpm(finalWpm);

        if (finalWpm > highScore) {
          setHighScore(finalWpm);
          localStorage.setItem("czar_wpm_highscore", finalWpm.toString());
        }
      }
    }
  };

  if (!isOpen) return null;

  // Insert user high score into leaderboard and sort
  const leaderboard = [...FAKE_LEADERBOARD];
  if (highScore > 0) {
    leaderboard.push({ name: "YOU (Personal Best)", wpm: highScore });
  }
  leaderboard.sort((a, b) => b.wpm - a.wpm);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="neo-box bg-background w-full max-w-5xl flex flex-col lg:flex-row max-h-[90vh] overflow-y-auto">
        
        {/* Left Side: Leaderboard */}
        <div className="lg:w-1/3 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-neo-border bg-[#0a0a0a] text-white p-6 flex flex-col">
          <h3 className="text-2xl font-black mb-6 flex items-center gap-2 text-neo-yellow">
            <Trophy className="w-6 h-6" /> Leaderboard
          </h3>
          <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
            {leaderboard.map((player, idx) => (
              <div 
                key={idx} 
                className={`flex justify-between items-center p-3 border-[2px] font-mono font-bold
                  ${player.name.includes("YOU") ? "bg-neo-pink text-black border-black transform rotate-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]" : "bg-black border-neo-border"}
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="opacity-50 w-4">{idx + 1}.</span>
                  <span className="truncate max-w-[120px]">{player.name}</span>
                </div>
                <span className="text-neo-green">{player.wpm} WPM</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Game */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="border-b-[3px] border-neo-border p-4 flex justify-between items-center bg-neo-green text-black">
            <div className="flex items-center gap-2 font-black text-xl">
              <Keyboard className="w-6 h-6" /> Developer Type Test
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white p-1 border-[3px] border-transparent hover:border-black transition-colors rounded">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col gap-8 relative flex-1" onClick={() => inputRef.current?.focus()}>
            
            {/* Invisible input to capture typing */}
            <input
              ref={inputRef}
              type="text"
              value={typed}
              onChange={handleChange}
              className="absolute opacity-0 pointer-events-none"
              autoFocus
            />

            {/* Typing Area */}
            <div className="text-3xl md:text-4xl font-mono leading-relaxed select-none relative z-10">
              {phrase.split("").map((char, i) => {
                let colorClass = "text-gray-400 opacity-50"; // pending
                
                if (i < typed.length) {
                  if (typed[i] === char) {
                    // correct
                    colorClass = "text-black bg-neo-green"; 
                  } else {
                    // incorrect
                    colorClass = "text-white bg-neo-pink underline decoration-wavy";
                  }
                }
                
                // Active cursor
                const isCursor = i === typed.length && !isFinished;
                
                return (
                  <span key={i} className={`${colorClass} ${isCursor ? 'border-l-4 border-neo-cyan animate-pulse' : ''} transition-colors`}>
                    {char}
                  </span>
                );
              })}
            </div>

            {/* Footer / Stats */}
            <div className="flex flex-col sm:flex-row justify-between items-center border-t-[3px] border-neo-border pt-6 mt-auto gap-4">
              <button 
                onClick={(e) => { e.stopPropagation(); resetGame(); }}
                className="neo-button neo-button-active bg-neo-cyan text-black px-4 py-2 font-black flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5" /> Next Quote
              </button>
              
              <div className="font-bold text-xl flex gap-6">
                <span>Progress: {Math.min(100, Math.round((typed.length / phrase.length) * 100))}%</span>
                {isFinished && (
                  <span className="text-neo-pink animate-pulse">{wpm} WPM</span>
                )}
              </div>
            </div>

            {/* Victory Overlay */}
            {isFinished && (
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-6 text-center">
                <div className="neo-box bg-neo-yellow text-black p-8 transform rotate-2 animate-bounce shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-5xl font-black mb-2">{wpm} WPM</h2>
                  <p className="text-xl font-bold">
                    {wpm > 100 ? "Are you a cyborg? 🤖" : 
                     wpm > 70 ? "Fast enough to dodge bugs! 🐛" : 
                     "Not bad, but ChatGPT types faster. 💻"}
                  </p>
                  <button 
                    onClick={(e) => { e.stopPropagation(); resetGame(); }}
                    className="mt-6 neo-button neo-button-active bg-neo-cyan text-black px-6 py-3 font-black text-xl w-full"
                  >
                    Play Again
                  </button>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}
