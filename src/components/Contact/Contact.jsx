import css from "./Contact.module.css";
import { PiPhoneCallFill } from "react-icons/pi";
import { BsPeopleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h2 className={css.text}>
          <BsPeopleFill className={css.icon} /> {name}
        </h2>
        <p className={css.text}>
          <PiPhoneCallFill className={css.icon} />
          {number}
        </p>
      </div>
      <button
        onClick={() => {
          dispatch(deleteContact(id));
        }}
        className={css.delBtn}
      >
        Delete
      </button>
    </>
  );
}
