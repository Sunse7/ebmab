import { useState } from "react";
import { Header } from "../../components/header/Header";
import { LoginModal } from "../../components/loginModal/LoginModal";
import "./style.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  async function handleLogin() {
    const body = {
      username,
      password,
    };
    try {
      const response = await axios.post(url, body);
      if (response.success) {
        navigate("/projekt/redigera");
      } else {
        console.error("Login failed", response);
      }
    } catch (err) {
      console.error("Error", err);
    }
  }

  return (
    <>
      <Header />
      <main className="login-page">
        <LoginModal
          handleClick={handleLogin}
          setPassword={setPassword}
          setUsername={setUsername}
        />
      </main>
    </>
  );
}
