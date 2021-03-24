import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

import "../App.css";

const Chatfeed = (props) => {
  let { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  const renderMessage = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName == message.sender.username;

      console.log("dsadadu",userName)

      return (
        <div key={`msg_${index}`} style={{ height: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={message[lastMessageKey]}
              />
            )}
          </div>

          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            react-receipts
          </div>
        </div>
      );
    });
  };

  if (!chat) return "Loading...";

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat.title}</div>

        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessage()}

      <div style={{ height: "100px" }} />

      <div className="message-form-container">
        <MessageForm {...props} chatID={activeChat} />
      </div>
    </div>
  );
};

export default Chatfeed;
