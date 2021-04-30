import React, { useState } from "react";
import Main from "./components/main";
import { Lines } from "react-preloaders";
import { username, password } from "./authFile";

export default function App() {
  const [Username, setUsername] = useState("huluhaslivesports@gmail.com");
  const [Password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const [error, setError] = useState("");
  const handleLogin = () => {
    if (username === Username && password === Password) {
      setIsAuth(true);
    } else {
      setError("Wrong password!");
      setIsAuth(false);
    }
  };

  return isAuth ? (
    <Main />
  ) : (
    <>
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={e => {
          setError("");
          setPassword(e.target.value);
        }}
      />
      <span style={{ color: "red" }}>{error}</span>
      <br />
      <button onClick={handleLogin}>Login</button>
    </>
  );

  // return (
  //   <React.Fragment>
  //     <Main />
  //     <Lines background="#1ce783" />
  //   </React.Fragment>
  // );
}
