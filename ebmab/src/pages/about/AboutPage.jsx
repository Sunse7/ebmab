import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import "./style.scss";

export function AboutPage() {
  return (
    <>
      <Header />
      <main className="about">
        <section className="about__box">
          <h3 className="about__box--title">Om oss</h3>
          <p className="about__box--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
