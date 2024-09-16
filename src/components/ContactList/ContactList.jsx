import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilterContacts } from "../../redux/contacts/slice";

export default function ContactList() {
  const contacts = useSelector(selectFilterContacts);

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.listItem}>
            <Contact name={name} number={number} id={id} />
          </li>
        );
      })}
    </ul>
  );
}
