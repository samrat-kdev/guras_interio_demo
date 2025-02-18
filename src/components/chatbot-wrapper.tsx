"use client";

import { useState } from "react";
import { ChatBot } from "sarathi-bot";
import Image from "next/image";

export default function ChatBotWrapper() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6">
      {isChatOpen ? (
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={() => setIsChatOpen(false)}
            className="absolute top-2 right-2 bg-red-500 text-white px-2  py-1 rounded-full text-sm shadow-md"
          >
            ✖
          </button>

          {/* ChatBot Component */}
          <ChatBot
            companyName="Guras Interio"
            logo="/assests/logo_slogan.jpg"
            theme={{
              primary: "#6b1b55",
              secondary: "#f5f7fa",
              text: "#ffffff",
              background: "#ffffff",
            }}
            apiConfig={{
              host: "your-api-host",
              port: "8000",
              protocol: "http",
            }}
            initialMessage="Hello! How can I help you today?"
          />
        </div>
      ) : (
        <button
          onClick={() => setIsChatOpen(true)}
          className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-300"
        >
          <Image
            src="/assests/logo_slogan.jpg"
            alt="ChatBot"
            width={50}
            height={50}
            className="rounded-full"
          />
        </button>
      )}
    </div>
  );
}
