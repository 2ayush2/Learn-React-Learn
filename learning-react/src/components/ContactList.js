import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteHandler = (id) => {
    props.getContact(id);
  };
  const renderList = props.contacts.map((con) => {
    console.log(con.name);
    return <ContactCard contact={con} clickHandler={deleteHandler} />;
  });
  return <div className="ui celled list">{renderList}</div>;
};
export default ContactList;
