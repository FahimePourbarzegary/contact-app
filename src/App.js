import { useState } from "react";
import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([
      ...contacts,
      { id: Math.ceil(Math.random() * 100), ...contact },
    ]);
  };
  const deleteContactHandler = (id) => {
    const filteredItem = contacts.filter((c) => c.id !== id);
    setContacts(filteredItem);
  };
  return (
    <div className="container">
      <header>Contact App</header>
      <ContactForm addContactHandler={addContactHandler} />
      <ContactList
        contacts={contacts}
        deleteContactHandler={deleteContactHandler}
      />
    </div>
  );
}

export default App;
