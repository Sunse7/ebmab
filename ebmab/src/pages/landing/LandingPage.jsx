import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import './style.scss';

export function LandingPage() {
  const navigate = useNavigate();
  const trailer = '/trailer.jpg';

  return (
    <>
      <main className="landing">
      <Header />
        <section className="landing__hero">
          <h2>Betong & Markarbeten <br /> på Västkusten</h2>
          <h3>Totalentrepenad inom betong och <br /> markarbeten sedan 2002</h3>
          <Button
            handleClick={() => navigate("/kontakt")}
            text="Kontakta oss"
          />
        </section>
        <section className="landing__service-section">
          <h3>Våra tjänster</h3>
          <section className="landing__service-section--img-container">
            <section>
              <p>Transporter</p>
              <figure style={{ backgroundImage: `url('${trailer}')`}}></figure>
            </section>
            <section>
              <p>Markarbeten</p>
              <figure style={{ backgroundImage: `url('${trailer}')`}}></figure>
            </section>
            <section>
              <p>Formning</p>
              <figure style={{ backgroundImage: `url('${trailer}')`}}></figure>
            </section>
            <section>
              <p>Armering</p>
              <figure style={{ backgroundImage: `url('${trailer}')`}}></figure>
            </section>
            <section>
              <p>Gjutning</p>
              <figure style={{ backgroundImage: `url('${trailer}')`}}></figure>
            </section>
            <section>
              <p>Mönsterbetong</p>
              <figure style={{ backgroundImage: `url('${trailer}')`}}></figure>
            </section>
            <section>
              <p>Industrigrunder</p>
              <figure style={{ backgroundImage: `url('${trailer}')`}}></figure>
            </section>
            <section>
              <p>Husgrunder</p>
              <figure style={{ backgroundImage: `url('${trailer}')`}}></figure>
            </section>
          </section>
        </section>
        <section className="landing__about-section"></section>
      </main>
      <Footer />
    </>
  );
}