const TheirMessage = ({ message, lastMessage }) => {
  const isMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}

      {message.attachment.length > 0 ? (
        <img
          src={message?.attachment?.file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isMessageByUser ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: "#CABDCD",
            marginLeft: isMessageByUser ? "4px" : "48px" 
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
