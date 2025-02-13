"use client";

import { ChatBot } from 'sarathi-bot';

export default function ChatBotWrapper() {
  return (
    <>
      <ChatBot
        companyName="Guras Interio"
        logo="/assests/logo_slogan.jpg"
        theme={{
          primary: '#6b1b55',
          secondary: '#f5f7fa',
          text: '#ffffff',
          background: '#ffffff'
        }}
        apiConfig={{
          host: 'your-api-host',
          port: '8000',
          protocol: 'http'
        }}
        initialMessage="Hello! How can I help you today?"
      />

    </>
  )
}