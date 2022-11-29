import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ContactDetail from "./components/ContactDetail";
import Layout from "./Layout/Layout";
import AddContact from "./pages/AddContact";
import ContactList from "./pages/ContactList";
import NotFound from "./pages/NotFound";
import routes from "./routes";

function App() {
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
    <div className="w-full h-screen flex flex-col items-center">
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
            element={<ContactDetail onDelete={deleteHandler} />}
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
