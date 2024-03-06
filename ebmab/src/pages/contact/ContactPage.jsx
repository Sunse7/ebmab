import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { LetterIcon } from "../../components/icons/LetterIcon";
import { PhoneIcon } from "../../components/icons/PhoneIcon";
import { PinIcon } from "../../components/icons/PinIcon";
import "./style.scss";

export function ContactPage() {
  return (
    <>
      <Header />
      <main className="contact">
        <h2>Välkommen att kontakta oss</h2>
        <section className="contact__phone">
          <PhoneIcon />
          <section className="contact__phone--info">
            <h3>På telefon</h3>
            <h3>0706-99 18 21</h3>
          </section>
        </section>
        <section className="contact__visit">
          <PinIcon />
          <section className="contact__visit--info">
            <h3>Besök oss</h3>
            <h3>Prästebäcksvägen 4, 451 55 Uddevalla</h3>
          </section>
        </section>
        <section className="contact__mail">
          <LetterIcon />
          <section className="contact__mail--info">
            <h3>Skicka ett mail</h3>
            <h3>anders@ebmab.se</h3>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
