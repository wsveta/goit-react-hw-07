import { useSelector } from "react-redux";
import Contact from "./Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../redux/contactsSlice";
import { selectNameFilter } from "../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul className={css.contacts}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.contact}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
