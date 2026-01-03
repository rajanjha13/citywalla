
import { GoogleGenAI, Type } from "@google/genai";
import { Tutor } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Fix: Initializing GoogleGenAI using named parameter for apiKey as per guidelines.
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getTutorMatches(query: string, tutors: Tutor[]): Promise<string[]> {
    const prompt = `
      You are an expert matching engine. Given the user's request: "${query}",
      and the following list of available tutors/coaching centers:
      ${JSON.stringify(tutors.map(t => ({ id: t.id, name: t.name, subjects: t.subjects, bio: t.bio, location: t.location })))}
      
      Identify the IDs of the tutors that best fit the user's needs. 
      Return the matching tutor IDs in the requested array format.
    `;

    try {
      // Fix: Directly calling generateContent with model and parameters as required.
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          // Fix: Using responseSchema as the recommended way to configure JSON output.
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.STRING,
            }
          }
        }
      });
      // Fix: Accessing .text property directly (not calling as a method).
      const text = response.text || "[]";
      return JSON.parse(text);
    } catch (error) {
      console.error("Gemini matching error:", error);
      return [];
    }
  }

  async getChatResponse(history: { role: string, parts: { text: string }[] }[], message: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...history, { role: 'user', parts: [{ text: message }] }],
        config: {
          systemInstruction: "You are EduBot, the friendly AI assistant for EduConnect. You help students find tutors, explain platform features, and give general educational advice. Keep answers concise and professional.",
        },
      });
      // Fix: Accessing .text property directly.
      return response.text || "I'm having a bit of trouble connecting right now. How else can I help?";
    } catch (error) {
      console.error("Gemini chat error:", error);
      return "I'm sorry, I encountered an error. Please try again.";
    }
  }
}
