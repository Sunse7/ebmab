import { Link } from "react-router-dom";
import { SocialMedia } from "../socialMedia/SocialMedia";
import "./style.scss";

export function Footer() {
  return (
    <footer className="footer">
      <section className="footer__info">
        <p>Kontakt</p>
        <p>0739-00 00 00</p>
        <p>Betonggatan 3 <br/> 451 54 Uddevalla</p>
        <p>anders@ebmab.se</p>
        <SocialMedia />
      </section>
      <section className="footer__additional">
        <Link to='/logga-in'>Logga in som admin</Link>
      </section>
    </footer>
  );
}
