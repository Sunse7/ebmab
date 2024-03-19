import { useState } from "react";
import { Header } from "../../components/header/Header";
import { LoginModal } from "../../components/loginModal/LoginModal";
import "./style.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  async function handleLogin() {
    const body = {
      email: username,
      password,
    };
    try {
      const response = await axios.post(
        "https://ijdn7kor92.execute-api.eu-north-1.amazonaws.com/user",
        body
      );
      if (response.data.success) {
        localStorage.setItem("jwtToken", response.data.token);
        localStorage.setItem("isAdmin", response.data.isAdmin);
        navigate("/projekt/redigera");
      } else {
        console.error("Login failed", response);
        setLoginError(true);
      }
    } catch (err) {
      console.error("Error", err);
    }
  }

  return (
    <>
      <Header />
      <main className="login-page">
        {loginError && <p className="error">Användarnamn eller lösenord är fel</p>}
        <LoginModal
          handleClick={handleLogin}
          setPassword={setPassword}
          setUsername={setUsername}
        />
      </main>
    </>
  );
}
