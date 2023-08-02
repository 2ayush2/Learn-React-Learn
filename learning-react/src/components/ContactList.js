import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const renderList = props.contacts.map((con) => {
    console.log(con.name);
    return <ContactCard contact={con} />;
  });
  return <div className="ui celled list">{renderList}</div>;
};
export default ContactList;
