import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ContactList = (props) => {
  const deleteHandler = (id) => {};
  const renderList = props.contacts.map((con) => {
    return (
      <ContactCard contact={con} key={con.id} clickHandler={deleteHandler} />
    );
  });
  return (
    <div className="main">
      <br />
      <br />
      <Link to="/add-contact">
        <h2>
          Contact List
          <button className="ui button blue right"> Add Contact</button>
        </h2>
      </Link>

      <div className="ui celled list">
        {renderList}
        <div>
          <br />
        </div>
      </div>
    </div>
  );
};
export default ContactList;
