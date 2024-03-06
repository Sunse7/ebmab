import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import './style.scss';
import { Card } from "../../components/card/Card";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <main className="landing">
      <Header />
        <section className="landing__hero">
          <h2>Betong & Markarbeten <br /> på Västkusten</h2>
          <h3>Something företag sedan årtal</h3>
          <Button
            handleClick={() => navigate("/kontakt")}
            text="Kontakta oss"
          />
        </section>
        <section className="landing__service-section">
          <h3>Våra affärsområden</h3>
          <Card src='./wall.JPG' alt='Concrete wall' text='Betonggjutning' />
        </section>
        <section className="landing__about-section"></section>
      </main>
      <Footer />
    </>
  );
}