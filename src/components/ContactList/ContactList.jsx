import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  if (contacts.length === 0) {
    return <p className={css.empty}>No contacts found.</p>;
  }

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
}
