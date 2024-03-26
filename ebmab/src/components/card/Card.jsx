import { TrashIcon } from "../icons/TrashIcon";
import "./style.scss";

export function Card({ data, onClick, isEdit }) {
  //max 120 char?
  return (
    data && (
      <section className="card">
        <figure
          className="card__image"
          style={{ backgroundImage: `url('${data.url}')` }}
        ></figure>
        <section className="card__info">
          <p className="card__info--text">{data.text}</p>
          {isEdit && (
            <button onClick={onClick}>
              <TrashIcon />
            </button>
          )}
        </section>
      </section>
    )
  );
}
