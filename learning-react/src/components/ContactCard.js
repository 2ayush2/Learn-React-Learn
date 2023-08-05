import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import user from "../images/user.jpeg";
const ContactCard = (props) => {
  const { name, email, id } = props.contact;
  return (
    <div className="item d-flex justify-content-between">
      <img src={user} className="ui avatar image" alt="" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        onClick={() => props.clickHandler(id)}
        style={{ color: "red" }}
      ></i>
    </div>
  );
};

export default ContactCard;
