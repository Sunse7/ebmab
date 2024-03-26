import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import "./style.scss";

export function AboutPage() {
  return (
    <section className="about-page">
      <Header />
      <main className="about">
        <section className="about__box">
          <h3 className="about__box--title">Om oss</h3>
          <p className="about__box--text">
            Erikssons Betong och Mark AB grundades 2002, i nuläget är vi 11
            anställda i bolaget. <br /> Vi utför allt från transporter, markarbeten,
            formning, armering, gjutning, mönsterbetong, industrigrunder och
            husgrunder. <br /> I alla våra verksamma år har hög kvalitet på våra
            utförda arbeten varit våran ambition, vilket har resulterat i en
            stor kundkrets med många återkommande kunder. Både privatpersoner
            och byggbolag, stora som små.
          </p>
        </section>
      </main>
      <Footer />
    </section>
  );
}
