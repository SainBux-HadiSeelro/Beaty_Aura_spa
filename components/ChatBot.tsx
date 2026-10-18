"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  Calendar,
  ChevronDown,
  MessageCircle,
  RefreshCw,
  Send,
  Sparkles,
  X
} from "lucide-react";
import {
  ChatMessage,
  CLINIC_INFO,
  QUICK_PROMPTS,
  getSmartBotResponse
} from "@/lib/knowledgeBase";

const INITIAL_MESSAGE: ChatMessage = {
  id: "welcome-1",
  sender: "bot",
  text: `Welcome to **${CLINIC_INFO.name}**! 🌿\n\nI am **Aura**, your 24/7 dedicated aesthetic concierge. How may I assist you today?`,
  timestamp: "Just now",
  quickReplies: [
    "✨ Treatment recommendations",
    "💰 Treatment pricing",
    "📅 Book consultation",
    "📍 Location & hours"
  ]
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll on new messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  // Load chat history from sessionStorage if available
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("beautyaura_chat_history");
      if (saved) {
        setMessages(JSON.parse(saved));
        setHasInteracted(true);
      }
    } catch {
      // ignore
    }
  }, []);

  // Save chat history to sessionStorage
  useEffect(() => {
    try {
      if (messages.length > 1) {
        sessionStorage.setItem("beautyaura_chat_history", JSON.stringify(messages));
      }
    } catch {
      // ignore
    }
  }, [messages]);

  const handleSend = async (userText?: string) => {
    const textToSend = (userText || input).trim();
    if (!textToSend || isTyping) return;

    setHasInteracted(true);
    setInput("");

    const userMsg: ChatMessage = {
      id: "u-" + Date.now(),
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    try {
      // Attempt backend API (hybrid with client fallback)
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend })
      });

      if (!res.ok) throw new Error("API failed");

      const data = await res.json();
      const botMsg: ChatMessage = {
        id: "b-" + Date.now(),
        sender: "bot",
        text: data.reply,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        }),
        quickReplies: data.quickReplies,
        actionLink: data.actionLink
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch {
      // Reliable instant client-side fallback
      const fallback = getSmartBotResponse(textToSend);
      const botMsg: ChatMessage = {
        id: "b-" + Date.now(),
        sender: "bot",
        text: fallback.text,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        }),
        quickReplies: fallback.quickReplies,
        actionLink: fallback.actionLink
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleResetChat = () => {
    setMessages([INITIAL_MESSAGE]);
    sessionStorage.removeItem("beautyaura_chat_history");
  };

  return (
    <>
      {/* Floating launcher trigger */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Subtle proactive invitation bubble if user hasn't opened yet */}
        {!isOpen && !hasInteracted && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.4 }}
            className="hidden sm:flex items-center gap-2.5 rounded-full bg-white/95 px-4 py-2.5 shadow-xl border border-charcoal/10 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sage" />
            </span>
            <p className="text-xs font-medium text-charcoal">
              Need assistance? Aura 24/7 Concierge is live
            </p>
          </motion.div>
        )}

        {/* Floating circular button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close live chat" : "Open 24/7 live chat"}
          className={`relative flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all duration-300 ${
            isOpen
              ? "bg-charcoal text-sand rotate-90"
              : "bg-sage text-sand hover:bg-sage/90"
          }`}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <>
              <MessageCircle className="h-6 w-6" />
              {/* Pulse live glow */}
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bloom opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-bloom border-2 border-sand" />
              </span>
            </>
          )}
        </motion.button>
      </div>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 flex h-[580px] max-h-[85vh] w-[calc(100vw-2rem)] sm:w-[420px] flex-col overflow-hidden rounded-[32px] border border-charcoal/10 bg-sand/95 shadow-2xl backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-charcoal/10 bg-white/70 px-5 py-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-sage text-sand shadow-sm">
                  <Bot className="h-5 w-5" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="font-serif text-base font-semibold text-charcoal">
                      Aura Concierge
                    </p>
                    <span className="rounded-full bg-sage/15 px-2 py-0.5 text-[10px] font-medium tracking-wide text-sage">
                      24/7 Live
                    </span>
                  </div>
                  <p className="text-[11px] text-charcoal/60">
                    BeautyAura Aesthetic Retreat
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleResetChat}
                  title="Clear conversation"
                  aria-label="Clear chat"
                  className="rounded-full p-2 text-charcoal/50 hover:bg-black/5 hover:text-charcoal transition"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Minimize chat"
                  aria-label="Minimize chat"
                  className="rounded-full p-2 text-charcoal/50 hover:bg-black/5 hover:text-charcoal transition"
                >
                  <ChevronDown className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 text-sm">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-[22px] px-4 py-3 leading-relaxed shadow-sm ${
                      msg.sender === "user"
                        ? "bg-charcoal text-sand rounded-br-sm"
                        : "bg-white text-charcoal/90 rounded-bl-sm border border-charcoal/5"
                    }`}
                  >
                    <div className="whitespace-pre-line prose-sm prose-p:my-1 prose-strong:text-charcoal">
                      {msg.text}
                    </div>

                    {/* Action link card if present */}
                    {msg.actionLink && (
                      <div className="mt-3 pt-2.5 border-t border-charcoal/10">
                        <Link
                          href={msg.actionLink.href}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1.5 rounded-full bg-sage px-3.5 py-1.5 text-xs font-medium text-sand transition hover:bg-sage/90 shadow-sm"
                        >
                          <Calendar className="h-3.5 w-3.5" />
                          {msg.actionLink.label}
                        </Link>
                      </div>
                    )}
                  </div>

                  <span className="mt-1 px-1 text-[10px] text-charcoal/40">
                    {msg.timestamp}
                  </span>

                  {/* Bot Quick Reply Buttons */}
                  {msg.quickReplies && msg.quickReplies.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5 max-w-[90%]">
                      {msg.quickReplies.map((reply) => (
                        <button
                          key={reply}
                          type="button"
                          onClick={() => handleSend(reply)}
                          className="rounded-full border border-sage/30 bg-white/80 px-3 py-1 text-xs text-charcoal hover:bg-sage hover:text-sand transition duration-200 shadow-2xs"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-charcoal/50 text-xs">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white border border-charcoal/10">
                    <Sparkles className="h-3.5 w-3.5 animate-spin text-sage" />
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-white px-3 py-2 border border-charcoal/10">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-charcoal/40" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-charcoal/40 [animation-delay:0.2s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-charcoal/40 [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Strip when empty */}
            {messages.length <= 2 && (
              <div className="border-t border-charcoal/10 bg-white/40 px-3 py-2">
                <p className="mb-1.5 text-[10px] uppercase tracking-wider text-charcoal/50 font-medium">
                  Frequently Asked
                </p>
                <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  {QUICK_PROMPTS.slice(0, 3).map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => handleSend(prompt)}
                      className="whitespace-nowrap rounded-full border border-charcoal/10 bg-white px-2.5 py-1 text-[11px] text-charcoal/80 hover:bg-sage/10 hover:text-charcoal transition"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="border-t border-charcoal/10 bg-white/80 p-3 backdrop-blur-md"
            >
              <div className="flex items-center gap-2 rounded-full border border-charcoal/15 bg-white px-3.5 py-1.5 focus-within:border-sage transition shadow-2xs">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about treatments, pricing, booking..."
                  className="flex-1 bg-transparent text-xs text-charcoal outline-none placeholder:text-charcoal/45"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  aria-label="Send message"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-charcoal text-sand disabled:opacity-30 disabled:hover:bg-charcoal transition hover:bg-sage"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
              <p className="mt-1.5 text-center text-[10px] text-charcoal/40">
                Aura AI Concierge is available 24/7 to guide your clinic visit.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
