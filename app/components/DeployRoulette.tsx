"use client";
import React, { useState } from "react";
import { AlertTriangle, Terminal, CheckCircle2 } from "lucide-react";

export default function DeployRoulette() {
  const [status, setStatus] = useState<'idle' | 'deploying' | 'success' | 'disaster'>('idle');

  const handleDeploy = () => {
    setStatus('deploying');
    
    // Fake deploy delay
    setTimeout(() => {
      const isDisaster = Math.random() < 0.25; // 25% chance of failure
      if (isDisaster) {
        localStorage.setItem("is_crashed", "true");
        window.dispatchEvent(new Event("site_crashed"));
        setStatus('idle'); // Reset the button for when they revert
      } else {
        setStatus('success');
      }
    }, 2000);
  };

  const handleRevert = () => {
    setStatus('idle');
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-8 mt-12 mb-20">
      
      {/* Idle / Success State */}
      <div className="neo-box bg-background border-[4px] border-black p-8 max-w-2xl w-full text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl font-black uppercase flex items-center gap-3">
          <Terminal className="w-8 h-8" /> Danger Zone
        </h2>
        <p className="font-bold text-lg opacity-80">
          Do not press this button. It deploys the current codebase straight to production without running tests. It is currently Friday at 4:59 PM.
        </p>
        
        {status === 'idle' && (
          <button 
            onClick={handleDeploy}
            className="neo-button neo-button-active bg-neo-pink text-black px-8 py-4 text-2xl font-black uppercase tracking-widest animate-pulse border-[4px] border-black w-full max-w-md hover:bg-red-500 hover:text-white transition-colors"
          >
            Deploy to Prod
          </button>
        )}

        {status === 'deploying' && (
          <div className="w-full max-w-md bg-black p-4 text-left font-mono text-neo-green font-bold flex flex-col gap-2">
            <span>&gt; Running tests... SKIPPED</span>
            <span>&gt; Building... SUCCESS</span>
            <span className="animate-pulse">&gt; Pushing to production server...</span>
          </div>
        )}

        {status === 'success' && (
          <div className="w-full max-w-md bg-neo-green text-black p-4 font-bold border-2 border-black flex flex-col items-center gap-2">
            <CheckCircle2 className="w-8 h-8" />
            <span className="text-xl font-black uppercase">Deploy Successful!</span>
            <span>You are a 10x developer. Go enjoy your weekend.</span>
            <button onClick={handleRevert} className="mt-4 underline text-sm hover:opacity-50">Reset Game</button>
          </div>
        )}
      </div>
    </div>
  );
}
