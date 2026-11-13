import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import initialContacts from "../../data/initialContacts";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";

const STORAGE_KEY = "contacts";

function loadContacts() {
  try {
    const savedContacts = window.localStorage.getItem(STORAGE_KEY);

    if (savedContacts === null) {
      return initialContacts;
    }

    const parsedContacts = JSON.parse(savedContacts);
    const isValidList =
      Array.isArray(parsedContacts) &&
      parsedContacts.every(
        (contact) =>
          contact &&
          typeof contact.id === "string" &&
          typeof contact.name === "string" &&
          typeof contact.number === "string",
      );

    return isValidList ? parsedContacts : initialContacts;
  } catch {
    return initialContacts;
  }
}

export default function App() {
  const [contacts, setContacts] = useState(loadContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
    } catch {
      // The phonebook still works when browser storage is unavailable.
    }
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };
    setContacts((previousContacts) => [...previousContacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((previousContacts) =>
      previousContacts.filter((contact) => contact.id !== contactId),
    );
  };

  const normalizedFilter = filter.trim().toLowerCase();
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
