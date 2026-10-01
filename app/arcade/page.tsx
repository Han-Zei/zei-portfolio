import React from "react";
import CatchTheBug from "../components/games/CatchTheBug";
import MemoryMatch from "../components/games/MemoryMatch";
import { Gamepad2, Keyboard, TerminalSquare } from "lucide-react";

export const metadata = {
  title: "Arcade | Czar Erson Isla",
  description: "Take a break and play some developer-themed mini games.",
};

export default function ArcadePage() {
  return (
    <main className="flex-1 flex flex-col font-sans pt-16 lg:pt-0 min-h-screen">
      
      {/* Header */}
      <section className="bg-neo-cyan border-b-[4px] border-black p-8 md:p-12">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Gamepad2 className="w-12 h-12 md:w-16 md:h-16" />
          <div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Developer Arcade
            </h1>
            <p className="text-xl font-bold mt-2 opacity-80">
              Because coding all day without a break is how you introduce bugs to production.
            </p>
          </div>
        </div>
      </section>

      {/* Secret Shortcuts Section */}
      <section className="p-6 md:p-12 border-b-[4px] border-black bg-background text-foreground">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
          <div className="flex-1 neo-box bg-background border-[3px] border-black p-6 flex items-center gap-4 transform rotate-1 hover:rotate-0 transition-transform">
            <Keyboard className="w-10 h-10 text-neo-pink" />
            <div>
              <h3 className="font-black text-xl">Typing Test</h3>
              <p className="font-bold">Press <kbd className="bg-black text-white px-2 py-1 rounded mx-1 font-mono">Cmd/Ctrl + J</kbd> anywhere.</p>
            </div>
          </div>
          
          <div className="flex-1 neo-box bg-background border-[3px] border-black p-6 flex items-center gap-4 transform -rotate-1 hover:rotate-0 transition-transform">
            <TerminalSquare className="w-10 h-10 text-neo-green" />
            <div>
              <h3 className="font-black text-xl">Hacker Terminal</h3>
              <p className="font-bold">Press <kbd className="bg-black text-white px-2 py-1 rounded mx-1 font-mono">Cmd/Ctrl + \</kbd> anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="p-6 md:p-12 flex-1 bg-background/50 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 relative z-10">
          
          {/* Catch The Bug */}
          <div className="flex flex-col gap-4">
            <div className="bg-neo-yellow text-black font-black uppercase text-2xl p-3 border-[3px] border-black self-start transform -rotate-2">
              1. Catch The Bug
            </div>
            <CatchTheBug />
          </div>

          {/* Tech Stack Memory */}
          <div className="flex flex-col gap-4">
            <div className="bg-neo-pink text-black font-black uppercase text-2xl p-3 border-[3px] border-black self-start transform rotate-1">
              2. Tech Stack Match
            </div>
            <MemoryMatch />
          </div>

        </div>
      </section>

    </main>
  );
}
