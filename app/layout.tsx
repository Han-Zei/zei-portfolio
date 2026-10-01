import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import Sidebar from "./components/Sidebar";
import ChatbotModal from "./components/ChatbotModal";
import TypingTestModal from "./components/TypingTestModal";
import TerminalModal from "./components/TerminalModal";
import GlobalCrashHandler from "./components/GlobalCrashHandler";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Czar Erson S. Isla | Portfolio",
  description: "Aspiring Data Analyst | CS Graduate | Future Computer Scientist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex selection:bg-neo-pink selection:text-white bg-background text-foreground overflow-x-hidden">
        <ThemeProvider>
          <Sidebar />
          <div className="flex-1 lg:ml-64 relative min-w-0">
            {children}
          </div>
          <ChatbotModal />
          <TypingTestModal />
          <TerminalModal />
          <GlobalCrashHandler />
        </ThemeProvider>
      </body>
    </html>
  );
}
