import ContactManager from "./components/ContactManager";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Header />
      <ContactManager />
    </div>
  );
}

export default App;
