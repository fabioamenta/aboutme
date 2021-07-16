import React from "react";

import { ContactWrapper, ContactForm } from "./Contact.styled";

const Contact = () => (
  <div>
    <h2 className="title">Contact me</h2>
    <ContactWrapper>
      <ContactForm
        id="contact-form"
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          return;
        }}
        className="contact-wrap"
      >
        <div className="row">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your name"
            aria-required="true"
          />
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Your email"
            aria-required="true"
          />
          <textarea
            className="form-control"
            rows="5"
            id="message"
            placeholder="Write your message"
            aria-required="true"
          />
        </div>
        <div className="button-wrapper">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </ContactForm>
    </ContactWrapper>
  </div>
);

export default Contact;
