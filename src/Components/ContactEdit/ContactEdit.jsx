import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ContactEdit = ({ editContactHandler }) => {
  const location = useLocation();
  let navigate = useNavigate();
  const [contact, setContact] = useState({id:location.state.id, name: location.state.name, email:location.state.email });
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
    editContactHandler(contact);
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
        <button>edit</button>
      </form>
    </section>
  );
};
 
export default ContactEdit;