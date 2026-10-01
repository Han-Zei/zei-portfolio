"use client";
import React, { useState, useEffect } from "react";
import { Bug, Play, Trophy } from "lucide-react";

export default function CatchTheBug() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [bugPosition, setBugPosition] = useState({ top: 50, left: 50 });
  const [gameResult, setGameResult] = useState<'won' | 'lost' | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (isPlaying && timeLeft === 0) {
      setIsPlaying(false);
      setGameResult(score >= 5 ? 'won' : 'lost');
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft, score]);

  const moveBug = () => {
    // Keep bug within 10% to 90% of the container to avoid overflow
    const newTop = Math.floor(Math.random() * 80) + 10;
    const newLeft = Math.floor(Math.random() * 80) + 10;
    setBugPosition({ top: newTop, left: newLeft });
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(10);
    setGameResult(null);
    setIsPlaying(true);
    moveBug();
  };

  const handleBugClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent bubbling
    if (!isPlaying) return;
    
    setScore((prev) => prev + 1);
    
    if (score + 1 >= 5) {
      setIsPlaying(false);
      setGameResult('won');
    } else {
      moveBug();
    }
  };

  // The bug is tricky, it might move if they hover too!
  const handleBugHover = () => {
    if (!isPlaying) return;
    // 30% chance the bug moves just by hovering over it
    if (Math.random() < 0.3) {
      moveBug();
    }
  };

  return (
    <div className="neo-box bg-background border-[4px] border-black p-6 flex flex-col items-center h-[500px] relative overflow-hidden">
      
      {/* Header */}
      <div className="w-full flex justify-between items-center mb-4 z-10 bg-white dark:bg-[#111] p-3 border-2 border-black">
        <h3 className="text-xl font-black flex items-center gap-2">
          <Bug className="w-6 h-6 text-neo-pink" /> Catch The Bug
        </h3>
        <div className="flex gap-6 font-bold font-mono text-lg text-black">
          <span className="bg-neo-cyan px-2 border-2 border-black">Time: {timeLeft}s</span>
          <span className="bg-neo-yellow px-2 border-2 border-black">Score: {score}/5</span>
        </div>
      </div>

      {/* Game Area */}
      <div className="w-full flex-1 relative bg-black/5 border-[3px] border-dashed border-black/20 cursor-crosshair">
        
        {!isPlaying && gameResult === null && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 dark:bg-black/90 z-20 backdrop-blur-sm text-center p-4">
            <h4 className="text-2xl font-black mb-2">P0 Outage Detected</h4>
            <p className="font-bold mb-6 text-center max-w-sm">Squash 5 bugs before the 10-second timer runs out. They are fast.</p>
            <button 
              onClick={startGame}
              className="neo-button neo-button-active bg-neo-pink text-black px-6 py-3 font-black uppercase flex items-center gap-2"
            >
              <Play className="w-5 h-5" /> Start Debugging
            </button>
          </div>
        )}

        {gameResult && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 dark:bg-black/90 z-20 backdrop-blur-sm p-4 text-center">
            {gameResult === 'won' ? (
              <div className="text-neo-green animate-bounce">
                <Trophy className="w-16 h-16 mx-auto mb-4" />
                <h4 className="text-4xl font-black mb-2 uppercase">Bug Squashed!</h4>
                <p className="font-bold text-xl opacity-80">Production is safe... for now.</p>
              </div>
            ) : (
              <div className="text-neo-pink">
                <Bug className="w-16 h-16 mx-auto mb-4 animate-pulse" />
                <h4 className="text-4xl font-black mb-2 uppercase">Time's Up!</h4>
                <p className="font-bold text-xl opacity-80">The bug has officially become a feature.</p>
              </div>
            )}
            <button 
              onClick={startGame}
              className="mt-8 neo-button neo-button-active bg-neo-yellow text-black px-6 py-3 font-black uppercase"
            >
              Try Again
            </button>
          </div>
        )}

        {/* The Bug! */}
        {isPlaying && (
          <button
            onMouseEnter={handleBugHover}
            onClick={handleBugClick}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 text-neo-pink hover:text-red-600 transition-colors z-10"
            style={{ 
              top: `${bugPosition.top}%`, 
              left: `${bugPosition.left}%`,
              transition: 'top 0.1s ease-out, left 0.1s ease-out'
            }}
          >
            <Bug className="w-10 h-10 animate-bounce" />
          </button>
        )}

      </div>
    </div>
  );
}
