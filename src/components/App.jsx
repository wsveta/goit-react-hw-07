import "./App.css";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";
import ContactForm from "./ContactForm";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="content">
      <div className="control-panel">
      <Toaster />
        <h1>Phonebook</h1>
        <ContactForm  />
        <SearchBox  />
      </div>
      <ContactList
      />
    </div>
  );
}

export default App;
