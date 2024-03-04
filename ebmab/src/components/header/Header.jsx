import { Link, useNavigate } from "react-router-dom";
import './style.scss';

export function Header() {
 const location = window.location;

  return (
    <header className="header">
      <nav className="header__nav">
        <Link to='/' className="header__nav--logo">
          <figure>Logo</figure>
        </Link>
        <section className="header__nav--links-container">
        <Link to="/projekt" className={location.pathname === '/projekt' ? 'active' : ''}>Projekt</Link>
        <Link to="/kontakt" className={location.pathname === '/kontakt' ? 'active' : ''}>Kontakt</Link>
        <Link to="/om-oss" className={location.pathname === '/om-oss' ? 'active' : ''}>Om oss</Link>
        </section>
      </nav>
    </header>
  );
}