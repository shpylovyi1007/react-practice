import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const searchName = useSelector(selectNameFilter).toLowerCase();

  const visibleContact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(searchName)
  );

  return (
    <ul className={css.list}>
      {visibleContact.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.listItem}>
            <Contact name={name} number={number} id={id} />
          </li>
        );
      })}
    </ul>
  );
}