import ContactDetail from "./components/ContactDetail";
import AddContact from "./pages/AddContact";
import ContactList from "./pages/ContactList";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "*", element: <NotFound /> },
  { path: "/", element: <ContactList /> },
  { path: "/add-contact", element: <AddContact /> },
  { path: "/contact/:id", element: <ContactDetail /> },
];

export default routes;
