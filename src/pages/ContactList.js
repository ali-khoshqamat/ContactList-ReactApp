import Contact from "../components/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className="w-[40rem] ">
      <h2 className="font-bold text-lg mb-2.5">Contact List</h2>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ContactList;
