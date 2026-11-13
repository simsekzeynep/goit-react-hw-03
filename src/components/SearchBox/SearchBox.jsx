import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  const searchId = useId();

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        id={searchId}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search contacts"
      />
    </div>
  );
}
