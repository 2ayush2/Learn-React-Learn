import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import { v4 } from "uuid";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContact] = useState([]);
  const contactHandler = (contact) => {
    setContact([...contacts, { id: v4(), ...contacts }]);
  };
  const removeHandler = (id) => {
    const newContact = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContact(newContact);
  };

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    console.log("contacts:", contacts);
    if (contacts) setContact(contacts);
  }, []);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Header />
      <br />
      <br />
      <AddContact contactHandler={contactHandler} />
      <br />
      <ContactList contacts={contacts} getContact={removeHandler} />
    </div>
  );
}

export default App;
