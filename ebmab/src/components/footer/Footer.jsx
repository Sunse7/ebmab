import { Link } from "react-router-dom";
import { SocialMedia } from "../socialMedia/SocialMedia";
import "./style.scss";

export function Footer() {
  return (
    <footer className="footer">
      <section className="footer__info">
        <p>Kontakt</p>
        <p>0706-99 18 21</p>
        <p>Prästebäcksvägen 4 <br/> 451 55  Uddevalla</p>
        <p>anders@ebmab.se</p>
        <SocialMedia />
      </section>
      <section className="footer__additional">
        <Link to='/logga-in'>Logga in som admin</Link>
      </section>
    </footer>
  );
}
