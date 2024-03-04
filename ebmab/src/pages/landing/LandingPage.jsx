import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <h2>Landing Page</h2>
      <Button handleClick={() => navigate('/kontakt')} text='Kontakta oss' />
      <Footer />
    </>
  );
}
