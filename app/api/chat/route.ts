import { NextResponse } from "next/server";
import { getSmartBotResponse, CLINIC_INFO } from "@/lib/knowledgeBase";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY;

    // Optional external LLM branch if API key is supplied
    if (apiKey && process.env.GEMINI_API_KEY) {
      try {
        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  role: "user",
                  parts: [
                    {
                      text: `You are Aura, the warm, sophisticated 24/7 aesthetic concierge for BeautyAura Luxury Aesthetic Retreat.
Clinic Context:
- Name: ${CLINIC_INFO.name}
- Address: ${CLINIC_INFO.address}
- Phone: ${CLINIC_INFO.phone}
- Email: ${CLINIC_INFO.email}
- Hours: Mon-Fri 9am-7pm, Sat 10am-6pm, Sun VIP Private
- Services: Skin Rejuvenation Therapy ($240, 75m), Laser Glow Treatment ($320, 60m), Natural Lift Therapy (HIFU) ($460, 90m), Contour Harmony Fillers ($390, 50m).
- Philosophy: Natural, subtle refinement with medical restraint and serenity.
User Question: "${message}"
Tone: Calming, luxurious, polite, knowledgeable, concise. Respond in 2-3 short, beautifully formatted paragraphs.`
                    }
                  ]
                }
              ]
            })
          }
        );

        if (geminiRes.ok) {
          const data = await geminiRes.json();
          const replyText =
            data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (replyText) {
            return NextResponse.json({
              reply: replyText,
              source: "gemini"
            });
          }
        }
      } catch (err) {
        console.warn("External API fetch failed, falling back to local intelligence:", err);
      }
    }

    // Always reliable 24/7 intelligent offline-first knowledge engine
    const localResult = getSmartBotResponse(message);
    return NextResponse.json({
      reply: localResult.text,
      quickReplies: localResult.quickReplies,
      actionLink: localResult.actionLink,
      source: "local-intelligence"
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
