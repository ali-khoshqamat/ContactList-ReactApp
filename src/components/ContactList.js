import Contact from "./Contact";

const ContactList = ({ contacts, deleteHandler }) => {
  return (
    <div>
      <h2 className="font-bold text-lg mb-2.5">Contact List</h2>
      {contacts.map((c) => (
        <Contact
          key={c.id}
          name={c.name}
          email={c.email}
          onDelete={() => deleteHandler(c.id)}
        />
      ))}
    </div>
  );
};

export default ContactList;
