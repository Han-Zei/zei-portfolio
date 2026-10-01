"use client";
import React, { useState, useEffect } from "react";
import { Database, Layout, Code2, Server, BarChart3, Cloud, ShieldAlert } from "lucide-react";

// The stack items we want to match
const CARDS = [
  { id: 'react', icon: Layout, name: 'React', color: 'bg-[#61DAFB]' },
  { id: 'python', icon: Code2, name: 'Python', color: 'bg-[#3776AB]' },
  { id: 'postgres', icon: Database, name: 'PostgreSQL', color: 'bg-[#336791]' },
  { id: 'next', icon: Server, name: 'Next.js', color: 'bg-black' },
  { id: 'grafana', icon: BarChart3, name: 'Grafana', color: 'bg-[#F46800]' },
  { id: 'gcp', icon: Cloud, name: 'GCP', color: 'bg-[#4285F4]' }
];

export default function MemoryMatch() {
  const [deck, setDeck] = useState<any[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [moves, setMoves] = useState(0);

  const initializeGame = () => {
    // Duplicate cards and shuffle
    const newDeck = [...CARDS, ...CARDS]
      .sort(() => Math.random() - 0.5)
      .map((card, idx) => ({ ...card, uniqueId: idx }));
    
    setDeck(newDeck);
    setFlippedIndices([]);
    setMatchedIds([]);
    setMoves(0);
    setIsChecking(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (index: number) => {
    // Prevent clicking if checking, already flipped, or already matched
    if (isChecking || flippedIndices.includes(index) || matchedIds.includes(deck[index].id)) {
      return;
    }

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    // If two cards are flipped, check for match
    if (newFlipped.length === 2) {
      setIsChecking(true);
      setMoves((m) => m + 1);
      
      const [firstIndex, secondIndex] = newFlipped;
      if (deck[firstIndex].id === deck[secondIndex].id) {
        // Match!
        setTimeout(() => {
          setMatchedIds((prev) => [...prev, deck[firstIndex].id]);
          setFlippedIndices([]);
          setIsChecking(false);
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          setFlippedIndices([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  };

  const isWon = matchedIds.length === CARDS.length && deck.length > 0;

  return (
    <div className="neo-box bg-background border-[4px] border-black p-6 flex flex-col items-center">
      
      {/* Header */}
      <div className="w-full flex justify-between items-center mb-8 bg-white dark:bg-[#111] p-3 border-2 border-black">
        <h3 className="text-xl font-black">Tech Stack Memory</h3>
        <div className="font-bold font-mono bg-neo-cyan px-2 border-2 border-black text-black">
          Moves: {moves}
        </div>
      </div>

      {isWon ? (
        <div className="text-center py-12 animate-in fade-in zoom-in">
          <div className="inline-block p-6 bg-neo-green border-4 border-black transform -rotate-2 mb-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-4xl font-black uppercase mb-2">Certification Granted</h4>
            <p className="font-bold text-lg">You are now a certified Full-Stack Vibe Coder.</p>
          </div>
          <br/>
          <button 
            onClick={initializeGame}
            className="neo-button neo-button-active bg-neo-pink text-black px-8 py-4 font-black uppercase text-xl"
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 w-full">
          {deck.map((card, idx) => {
            const isFlipped = flippedIndices.includes(idx) || matchedIds.includes(card.id);
            const isMatched = matchedIds.includes(card.id);
            const Icon = card.icon;

            return (
              <div 
                key={card.uniqueId}
                onClick={() => handleCardClick(idx)}
                className={`relative aspect-square cursor-pointer transition-transform duration-300 transform-gpu
                  ${isFlipped ? 'rotate-0' : 'hover:scale-105 hover:-rotate-2'}
                `}
                style={{ perspective: '1000px' }}
              >
                <div 
                  className={`w-full h-full border-4 border-black transition-all duration-500`}
                  style={{ 
                    transformStyle: 'preserve-3d', 
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)' 
                  }}
                >
                  {/* Front of card (Hidden state) */}
                  <div 
                    className="absolute inset-0 bg-neo-yellow flex items-center justify-center backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <ShieldAlert className="w-8 h-8 opacity-50" />
                  </div>

                  {/* Back of card (Revealed state) */}
                  <div 
                    className={`absolute inset-0 ${card.color} text-white flex flex-col items-center justify-center backface-hidden border-4 ${isMatched ? 'border-neo-green animate-pulse' : 'border-black'}`}
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <Icon className="w-8 h-8 md:w-12 md:h-12 mb-2" />
                    <span className="font-black text-xs md:text-sm uppercase tracking-tighter hidden md:block">{card.name}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
