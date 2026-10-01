"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Code, GraduationCap, Mail, Moon, Sun, Monitor, Keyboard, TerminalSquare, User, Gamepad2 } from "lucide-react";

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [visitors, setVisitors] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const fetchVisitors = async () => {
      try {
        const res = await fetch('/api/visitors');
        const data = await res.json();
        if (data.count !== undefined) {
          setVisitors(data.count);
        }
      } catch (err) {
        console.error(err);
      }
    };
    
    fetchVisitors();
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "Tech Stack", href: "/stack", icon: TerminalSquare },
    { name: "Projects", href: "/projects", icon: Code },
    { name: "Experience", href: "/experience", icon: GraduationCap },
    { name: "Certifications", href: "/certifications", icon: Monitor },
    { name: "Resume", href: "/resume", icon: User },
    { name: "Arcade", href: "/arcade", icon: Gamepad2 },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 w-full z-50 neo-box rounded-none border-t-0 border-l-0 border-r-0 flex justify-between items-center p-4 bg-background">
        <span className="font-mono font-black text-xl text-neo-purple">{'<Czar />'}</span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="neo-button px-3 py-1 bg-neo-yellow text-black font-bold">
          Menu
        </button>
      </div>

      <aside className={`fixed inset-y-0 left-0 z-40 w-64 neo-box rounded-none border-t-0 border-b-0 border-l-0 flex flex-col transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} bg-background`}>
        
        <div className="p-6 hidden lg:block border-b-[3px] border-neo-border relative overflow-hidden group cursor-default">
          <div className="absolute inset-0 bg-neo-purple translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
          <h1 className="font-black text-4xl tracking-tighter uppercase leading-[0.8] relative z-10 group-hover:text-black transition-colors">
            Czar<br/>Erson<span className="text-neo-cyan group-hover:text-black">.</span>
          </h1>
        </div>

        <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 font-bold">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 transition-colors group p-2 rounded ${isActive ? "bg-neo-cyan text-black border-2 border-black" : "hover:text-neo-pink"}`}
              >
                <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {link.name}
              </Link>
            );
          })}

          <div className="my-2 h-[3px] bg-neo-border w-full"></div>

          <button 
            className="flex items-center gap-3 text-left hover:text-neo-cyan transition-colors group p-2"
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
          >
            <TerminalSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <div className="flex flex-col">
              <span>Ask anything</span>
              <span className="text-xs font-normal opacity-70">⌘ + K</span>
            </div>
          </button>

          <button 
            className="flex items-center gap-3 text-left hover:text-neo-green transition-colors group p-2"
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'j', metaKey: true }))}
          >
            <Keyboard className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <div className="flex flex-col">
              <span>Typing test</span>
              <span className="text-xs font-normal opacity-70">⌘ + J</span>
            </div>
          </button>
        </nav>

        <div className="p-6 border-t-[3px] border-neo-border flex flex-col gap-4">
          <div className="flex items-center gap-2 text-sm font-bold bg-neo-yellow text-black p-2 neo-box rounded">
            <User className="w-4 h-4" />
            <span>Total Visitors: {visitors}</span>
          </div>

          <div className="flex justify-between items-center">
            {mounted && (
              <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="neo-button p-2 bg-white text-black hover:bg-gray-100"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            
            <a href="mailto:czrisla@gmail.com" className="text-sm font-bold hover:underline">
              Hire Me &rarr;
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
