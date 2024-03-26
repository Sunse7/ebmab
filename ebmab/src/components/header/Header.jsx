import { Link } from "react-router-dom";
import './style.scss';
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
 const location = window.location;

 function toggleMenu() {
  setMenuOpen(!menuOpen);
 }

  return (
    <header className="header">
      <nav className="header__nav">
        <Link to='/' className="header__nav--logo">
          <figure><img src="/logo.png" alt="Logo" /></figure>
        </Link>
        <button className="header__nav--hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <section className={`header__nav--links-container ${menuOpen ? 'open' : '' }`}>
        <Link to="/projekt" className={location.pathname === '/projekt' ? 'active' : ''}>Projekt</Link>
        <Link to="/kontakt" className={location.pathname === '/kontakt' ? 'active' : ''}>Kontakt</Link>
        <Link to="/om-oss" className={location.pathname === '/om-oss' ? 'active' : ''}>Om oss</Link>
        </section>
      </nav>
    </header>
  );
}