import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) sendMessage(creds, chatId, { text });

    setValue("");
  };

  const onhandleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message ..."
        onChange={onhandleChange}
        value={value}
      />
    </form>
  );
};

export default MessageForm;
