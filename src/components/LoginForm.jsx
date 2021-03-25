import { useState } from "react";
import axios from "axios";
import "../App.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authObject = {
      "Project-ID": "410766f6-ee63-4af0-bb53-90dbf6327498",
      "User-Name": username,
      "User-Secret": password,
    };
    console.warn("auth ====", authObject);

    try {
      await axios.get("https://api.chatengine.io/chats/", {
        headers: authObject,
      });

      window.location.reload()
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } catch (error) {
      setError("Oops, Username or Password is invalid");
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required={true}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required={true}
          />

          <div align="center">
            <button type="submit" className="button">
              <span>Start chat!</span>
            </button>
          </div>

          <div>
            <h2 className="error">{error}</h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
