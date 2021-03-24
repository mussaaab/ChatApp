import React from "react";
import { ChatEngine } from "react-chat-engine";
import Chatfeed from './components/ChatFeed'

export const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="410766f6-ee63-4af0-bb53-90dbf6327498"
      userName="johnDave"
      userSecret="qwerty"
      renderChatFeed={(chatAppProps) => <Chatfeed {...chatAppProps} />}
    />
  );
};
