import React from "react";
import "./ContactForm.css";
const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <form>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="Firstname" />
          <input type="text" name="Lastname" placeholder="Lastname" />
        </div>
        <input type="text" name="email" placeholder="Email" />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          rows={3}
        ></textarea>
        <button>SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
