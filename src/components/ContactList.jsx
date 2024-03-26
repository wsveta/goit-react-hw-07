import { useSelector } from "react-redux";
import Contact from "./Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../redux/contactsSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contacts}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={css.contact}>
          <Contact contact={contact} />
        </li>
        ))}
    </ul>
  );
};

export default ContactList;
