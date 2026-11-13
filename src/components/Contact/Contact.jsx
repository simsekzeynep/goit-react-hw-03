import { FaPhone, FaUser } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  const { id, name, number } = contact;
  const phoneHref = "tel:" + number.replace(/[^\d+]/g, "");

  return (
    <li className={css.card}>
      <div className={css.info}>
        <p className={css.row}>
          <FaUser className={css.icon} aria-hidden="true" />
          <span className={css.text}>{name}</span>
        </p>
        <p className={css.row}>
          <FaPhone className={css.icon} aria-hidden="true" />
          <a className={css.phone} href={phoneHref}>
            {number}
          </a>
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => onDelete(id)}
        aria-label={"Delete " + name}
      >
        Delete
      </button>
    </li>
  );
}
