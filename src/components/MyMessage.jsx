import '../App.css'

const MyMessage = ({ message }) => {
  console.log("message", message);
  if (message?.attachment?.length > 0) {
    return (
      <img
        src={message?.attachment?.file}
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
        marginRight: "15px",
        color: "#fff",
        backgroundColor: "#260d3d",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
