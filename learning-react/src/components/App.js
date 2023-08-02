import "./App.css";
import React, { useState } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContact] = useState([]);
  const contactHandler = (contact) => {
    setContact([...contacts, contact]);
    console.log(contact);
  };
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
