import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contact, onDelete }) {
  return (
    <div className="contact-list">
      {contact.map((contact) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          onDelete={onDelete}
          {...contact}
        />
      ))}
    </div>
  );
}

export default ContactList;
