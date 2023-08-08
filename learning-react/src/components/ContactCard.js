import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import user from "../images/user.jpeg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const ContactCard = (props) => {
  const { name, email, id } = props.contact;
  return (
    <div className="item d-flex justify-content-between">
      <Link
        to={{
          pathname: `/contact-details/${id}`,
          state: { contact: props.contact },
        }}
      >
        <img src={user} className="ui avatar image" alt="" />
        <div className="content">
          <div className="header">{name}</div>
          <div>{email}</div>
        </div>
      </Link>

      <i
        className="trash alternate outline icon"
        onClick={() => props.clickHandler(id)}
        style={{ color: "red" }}
      ></i>
    </div>
  );
};

export default ContactCard;
