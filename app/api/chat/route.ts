import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI assistant for Czar Erson S. Isla's portfolio website. 
Czar is an Aspiring Data Analyst and CS Graduate from AMA Computer College (High Honors) and Isabela State University (Major in Data Mining, GWA 1.60).
He has experience as a Software Engineer Intern at Amdocs (PostgreSQL, Grafana) and as a Gov Intern at CHED and PESO (Data Cleaning).
He is highly skilled in Python, SQL, PostgreSQL, Data Mining, React, Next.js, and Tailwind.
Your tone should be witty, slightly sarcastic, and very developer-focused (fitting a Neobrutalism theme). 
Answer questions concisely about Czar's skills and experience. Do not break character.
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const userMessage = body.message;
    const history = body.history || [];

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key is missing! Please tell Czar to add GEMINI_API_KEY to his .env.local file." }, 
        { status: 500 }
      );
    }

    const fullInput = history.map((msg: any) => `${msg.role === 'bot' ? 'Assistant' : 'User'}: ${msg.text}`).join('\n') + `\nUser: ${userMessage}`;

    const interaction = await client.interactions.create({
      model: 'gemini-3.5-flash-lite',
      input: fullInput,
      system_instruction: SYSTEM_INSTRUCTION,
      store: false
    });

    return NextResponse.json({ text: interaction.output_text });
  } catch (error: any) {
    console.error("Chat API Error:", error);
    
    if (error.status === 503 || error?.message?.includes("high demand") || error?.message?.includes("overloaded")) {
      return NextResponse.json({ error: "Oof! The Gemini servers are currently experiencing insanely high global demand. Give it a few seconds and try again." }, { status: 503 });
    }

    const errorMsg = error?.message || "Failed to connect to my AI brain.";
    return NextResponse.json({ error: `Backend Error: ${errorMsg}` }, { status: 500 });
  }
}
