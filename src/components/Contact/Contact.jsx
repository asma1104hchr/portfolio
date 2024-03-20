import React from "react";
import "./Contact.css";
import ContactCard from "./ContactCard/ContactCard";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <h5>Contact me </h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactCard
            iconUrl="./assets/images/email-icon.svg"
            text="asma@gmail.com"
          />
          <ContactCard
            iconUrl="./assets/images/github-icon.svg"
            text="https://github.com/asma11hchr04"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
