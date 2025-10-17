
import { GoogleGenAI, Chat } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const model = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
        systemInstruction: 'You are a helpful and expert DevOps assistant. You are speaking to a potential employer or recruiter who is visiting a portfolio. Keep your answers concise, professional, and highly accurate. Start the conversation by introducing yourself and offering assistance.',
    },
});

export const chatSession: Chat = model;

export async function sendMessageToAI(message: string): Promise<string> {
    try {
        const result = await chatSession.sendMessage({ message });
        return result.text;
    } catch (error) {
        console.error("Error sending message to Gemini:", error);
        if (error instanceof Error) {
            return `Sorry, I encountered an error: ${error.message}`;
        }
        return "Sorry, I encountered an unknown error.";
    }
}
