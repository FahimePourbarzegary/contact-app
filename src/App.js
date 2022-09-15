import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import { Routes, Route } from "react-router-dom";
function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([
      ...contacts,
      { id: Math.ceil(Math.random() * 100), ...contact },
    ]);
  };

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    console.log(savedContacts);
    if (savedContacts) setContacts(savedContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContactHandler = (id) => {
    const filteredItem = contacts.filter((c) => c.id !== id);
    setContacts(filteredItem);
  };
  return (
    <div className="container">
      <header>Contact App</header>
      <Routes>
        <Route
          path="/add"
          element={<ContactForm addContactHandler={addContactHandler} />}
        />
        <Route
          path="/"
          exact
          element={
            <ContactList
              contacts={contacts}
              deleteContactHandler={deleteContactHandler}
            />
          }
        />
      </Routes>
      {/*<ContactForm addContactHandler={addContactHandler} />
      <ContactList
        contacts={contacts}
        deleteContactHandler={deleteContactHandler}
  />*/}
    </div>
  );
}

export default App;
