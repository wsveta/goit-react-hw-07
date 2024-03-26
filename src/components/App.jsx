import "./App.css";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";
import ContactForm from "./ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectError, selectIsLoading } from "../redux/contactsSlice";
import {fetchContacts} from '../redux/contactsOps';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="content">
      <div className="control-panel">
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
      {loading && !error && <b>Loading, please wait...</b>}
      </div>
      <ContactList />
    </div>
  );
}

export default App;
