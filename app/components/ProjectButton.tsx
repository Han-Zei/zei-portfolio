"use client";
import React, { useState } from "react";

export default function ProjectButton({ children, className }: { children: React.ReactNode, className: string }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <button onClick={handleClick} className={className}>
        {children}
      </button>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="neo-box bg-neo-yellow text-black max-w-md w-full p-8 relative transform rotate-1 animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button 
              onClick={() => setShowModal(false)}
              className="absolute -top-4 -right-4 neo-box bg-neo-pink px-4 py-2 font-black text-xl hover:scale-110 transition-transform"
            >
              X
            </button>

            <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">Access Denied</h3>
            <p className="font-bold text-lg mb-6 leading-relaxed">
              Sorry bro, it's not yet uploaded. If you want you can contact me and I will give you a demo! 😎
            </p>
            
            <div className="flex gap-4">
              <a href="/contact" className="neo-button neo-button-active bg-black text-white px-6 py-3 font-black text-center flex-1">
                Contact Me
              </a>
              <button onClick={() => setShowModal(false)} className="neo-button neo-button-active bg-white text-black px-6 py-3 font-black text-center flex-1">
                Cool, thanks
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
