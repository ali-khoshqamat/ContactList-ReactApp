import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { useEffect, useState } from "react";

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(
      localStorage.getItem("contacts")
        ? JSON.parse(localStorage.getItem("contacts"))
        : []
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

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
