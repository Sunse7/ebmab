import { TrashIcon } from '../icons/TrashIcon';
import "./style.scss";

export function Card({ data, onClick, isEdit }) {
  return (
    data && (
      <section className="card">
        <figure
          className="card__image"
          style={{ backgroundImage: `url('${data.url}')` }}
        ></figure>
        <p className="card__text">{data.text}</p>
        {
          isEdit && <button onClick={onClick}><TrashIcon /></button>
        }
      </section>
    )
  );
}
