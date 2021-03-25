import React from "react";
import { ChatEngine } from "react-chat-engine";
import Chatfeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

export const App = () => {
  if (!localStorage.getItem("username")) {
    return <LoginForm />;
  } else {
    return (
      <ChatEngine
        height="100vh"
        projectID="410766f6-ee63-4af0-bb53-90dbf6327498"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <Chatfeed {...chatAppProps} />}
      />
    );
  }
};
