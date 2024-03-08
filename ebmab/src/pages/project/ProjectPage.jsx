import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Card } from '../../components/card/Card';
import './style.scss';

export function ProjectPage() {
  return (
    <>
      <Header />
      <main className="project">
        <h2 className="project__title">Projekt</h2>
        <section className="project__card-container">
          <Card />
        </section>
      </main>
      <Footer />
    </>
  );
}
