import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { useState } from "react";

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };
  const deleteHandler = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div className="w-[40rem] flex flex-col justify-between gap-y-8">
      <AddContact onAddContact={addContactHandler} />
      <ContactList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  );
};

export default ContactManager;
