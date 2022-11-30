import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Contact from "../components/Contact";
import { deleteContact, getContacts } from "../services/CRUDContactService";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [searchContacts, setSearchContacts] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getContacts()
      .then(({ data }) => {
        setContacts(data);
        setSearchContacts(data);
        toast.success("All Contacts Loaded :)");
      })
      .catch((error) => toast.error("there is an Error!"));
  }, []);

  const searchHandler = (e) => {
    // setSearchTerm(e.target.value);
    const search = e.target.value;
    setContacts(
      searchContacts.filter((c) =>
        Object.values(c).join(" ").toLowerCase().includes(search.toLowerCase())
      )
    );
  };

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
    <div className="w-[40rem] flex flex-col">
      <h2 className="font-bold text-lg mb-2.5">Contact List</h2>
      <input
        type="text"
        // value={searchTerm}
        onChange={searchHandler}
        className="self-center px-3.5 py-1.5 mb-6 outline-none border border-gray-300 rounded-md"
        placeholder="Search..."
      />
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={deleteHandler} />
      ))}
    </div>
  );
};

export default ContactList;
