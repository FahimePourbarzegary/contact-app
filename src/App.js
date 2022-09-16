import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import { Routes, Route } from "react-router-dom";
import ContactDetail from "./Components/ContactDetail/ContactDetail";
import ContactEdit from "./Components/ContactEdit/ContactEdit";
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
    if (savedContacts) setContacts(savedContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContactHandler = (id) => {
    const filteredItem = contacts.filter((c) => c.id !== id);
    setContacts(filteredItem);
  };
  const editContactHandler = (contact) => {
    const index = contacts.findIndex((c) => c.id === contact.id);
    console.log({ ...contacts[index] });
    const newContact = { ...contacts[index] };
    newContact.name = contact.name;
    newContact.email = contact.email;
    const updateContacts = [...contacts];
    updateContacts[index] = newContact;
    setContacts(updateContacts);
  };
  return (
    <div className="container">
      <header>Contact App</header>
      <Routes>
        <Route
          path="/edit/:id"
          element={<ContactEdit editContactHandler={editContactHandler} />}
        />
        <Route path="/user/:id" element={<ContactDetail />} />
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
