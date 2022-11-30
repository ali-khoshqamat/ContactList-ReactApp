import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Contact from "../components/Contact";
import { deleteContact, getContacts } from "../services/CRUDContactService";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts()
      .then(({ data }) => {
        setContacts(data);
        toast.success("All Contacts Loaded :)");
      })
      .catch((error) => toast.error("there is an Error!"));
  }, []);

  const deleteHandler = async (id) => {
    try {
      await deleteContact(id);
      setContacts(contacts.filter((c) => c.id !== id));
      toast.success("Contact was Deleted :)");
    } catch (error) {
      toast.error("there is an Error!");
    }
  };

  return (
    <div className="w-[40rem] ">
      <h2 className="font-bold text-lg mb-2.5">Contact List</h2>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={deleteHandler} />
      ))}
    </div>
  );
};

export default ContactList;
