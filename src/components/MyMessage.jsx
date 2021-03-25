import '../App.css'

const MyMessage = ({ message }) => {
  if (message?.attachments?.length) {
    return (
      <img
        src={message?.attachments[0]?.file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "5px",
        color: "#fff",
        backgroundColor: "#260d3d",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
