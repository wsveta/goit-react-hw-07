import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";

const Contact = ({ data }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(data.id));
  };
  
  return (
    <>
      <div>
        <div className={css.name}>
          <IoPersonSharp />
          <h2>{data.name}</h2>
        </div>
        <div className={css.number}>
          <FaPhone />
          <p>{data.number}</p>
        </div>
      </div>
      <button onClick={handleDelete} className={css.contactButton}>
        Delete
      </button>
    </>
  );
};

export default Contact;
