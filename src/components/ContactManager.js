import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";

const ContactManager = () => {
  return (
    <div className="w-3/4 flex flex-col justify-between gap-y-5">
      <Header />
      <AddContact />
      <ContactList />
    </div>
  );
};

export default ContactManager;
