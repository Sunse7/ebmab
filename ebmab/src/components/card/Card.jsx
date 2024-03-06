import "./style.scss";

export function Card({ src, alt, text }) {
  return (
    <section className="card">
      <figure className="card__image">
        <img src={src} alt={alt} />
      </figure>
      <p className="card__text">{text}</p>
    </section>
  );
}
