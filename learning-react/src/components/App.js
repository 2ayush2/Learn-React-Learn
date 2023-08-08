import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from "./AddContact";
import { v4 } from "uuid";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";

function App() {
  const [contacts, setContact] = useState(() => {
    const contactsData = JSON.parse(localStorage.getItem("contacts"));
    return contactsData || [];
  });

  const contactHandler = (contact) => {
    setContact([...contacts, { id: v4(), ...contact }]);
  };

  const removeHandler = (id) => {
    const newContact = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContact(newContact);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Router>
      <div className="ui container">
        <Switch>
          <Route path="/contact" />
          <Route
            path="/add-contact"
            render={(props) => (
              <AddContact {...props} contactHandler={contactHandler} />
            )}
          />
          <Route
            path="/contact-list"
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getContact={removeHandler}
              />
            )}
          />
          <Route path="/contact-details/:id" component={ContactDetails} />
        </Switch>

        <Header />

        <br />
      </div>
    </Router>
  );
}

export default App;
