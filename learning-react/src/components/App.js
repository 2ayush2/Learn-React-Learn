import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContact] = useState(() => {
    const storeContact = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storeContact ? JSON.parse(storeContact) : [];
  });
  const contactHandler = (contact) => {
    setContact([...contacts, contact]);
    console.log(contact);
  };

  // useEffect(() => {
  //   const con = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (con) {
  //     setContact(con);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Header />
      <br />
      <br />
      <AddContact contactHandler={contactHandler} />
      <br />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
