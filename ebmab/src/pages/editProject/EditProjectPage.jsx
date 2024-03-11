import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";

export function EditProjectPage() {
  return (
    <>
      <Header />
      <main className="project">
        <h2 className="project__title">Projekt</h2>
        <section className="project__add">
          <input type="file" name="img" id="" />
          <textarea name="img-text" id="" cols="30" rows="10"></textarea>
        </section>
        <section className="project__card-container">
          
        </section>
      </main>
      <Footer />
    </>
  );
}
