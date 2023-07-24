"use client";
import Chat from "./components/chat";
import { useChat } from "ai/react";
import React, { useEffect, useRef, useState, FormEvent } from "react";


const Page: React.FC = () => {
  const [context, setContext] = useState<string[] | null>(null);
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="...">
      <Header className="..." />
      <div className="...">
        <Chat
          input={input}
          handleInputChange={handleInputChange}
          handleMessageSubmit={handleSubmit}
          messages={messages}
        />
      </div>
    </div>
  );
};

export default Page;