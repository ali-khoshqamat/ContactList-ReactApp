import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ContactDetail from "./components/ContactDetail";
import Layout from "./Layout/Layout";
import AddContact from "./pages/AddContact";
import ContactList from "./pages/ContactList";
import NotFound from "./pages/NotFound";
import routes from "./routes";
import {
  deleteContact,
  getContacts,
  postContact,
  putContact,
} from "./services/CRUDContactService";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts("/contacts")
      .then(({ data }) => {
        setContacts(data);
        toast.success("All Contacts Loaded :)");
      })
      .catch((error) => toast.error("there is an Error!"));
  }, []);

  const addContactHandler = async (contact) => {
    try {
      const { data } = await postContact(contact);
      setContacts([...contacts, data]);
      toast.success("Cantact Added :)");
    } catch (error) {
      toast.error("there is an Error!");
    }
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
  const editContactHandler = async (id, contact) => {
    try {
      await putContact(id, contact);
      const { data } = await getContacts();
      setContacts(data);
      toast.success("Cantact Updated :)");
    } catch (error) {
      toast.error("there is an Error!");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <ToastContainer />
      <Layout>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/"
            element={
              <ContactList contacts={contacts} onDelete={deleteHandler} />
            }
          />
          <Route
            path="/add-contact"
            element={<AddContact onAddContact={addContactHandler} />}
          />
          <Route
            path="/contact/:id"
            element={
              <ContactDetail
                onDelete={deleteHandler}
                onPutContact={editContactHandler}
              />
            }
          />

          {/* {routes.map((route) => (
            <Route {...route} key={route.path} />
          ))} */}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
