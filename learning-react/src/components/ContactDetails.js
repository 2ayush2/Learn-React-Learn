import React from "react";
import user from "../images/user.jpeg";

const ContactDetails = (props) => {
  console.log(props);
  const { name, email } = props.location.state.contact;
  return (
    <div className="main">
      <br />
      <br />
      <br />
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="" srcset="" />
        </div>
        <div className="content">
          <div className="header">
            {email}
            <div className="description">{name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
