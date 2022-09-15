import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactForm.css";
const ContactForm = ({ addContactHandler }) => {
  let navigate = useNavigate();
  const [contact, setContact] = useState({ name: "", email: "" });
  const onChangeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
    console.log(contact);
  };
  const submitHandler = (e) => {
    if (!contact.name || !contact.email) {
      e.preventDefault();
      alert("error: You must enter somthing in input ");
      return;
    }
    e.preventDefault();
    addContactHandler(contact);
    setContact({ name: "", email: "" });
    navigate("/");
  };
  return (
    <section className="contact-form">
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={contact.name}
          onChange={onChangeHandler}
          placeholder="Name..."
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={contact.email}
          onChange={onChangeHandler}
          placeholder="Email..."
        />
        <button>add</button>
      </form>
    </section>
  );
};

export default ContactForm;
