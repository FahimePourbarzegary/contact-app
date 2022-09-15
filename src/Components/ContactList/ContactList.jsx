import { Link } from "react-router-dom";
import userimg from "./../../assets/images/user.png";
import "./ContactList.css";
const ContactList = ({ contacts, deleteContactHandler }) => {
  return (
    <section className="contact-list">
      <div className="contact-list__add">
        <Link to="/add">
          <button className="contact-list__add-btn">Add New Contact</button>
        </Link>
      </div>
      {contacts.map((c) => (
        <div className="contact" key={c.id}>
          <div className="contact__desc">
            <img src={userimg} alt="user" />
            <div>
              <h4 className="contact__desc-name">{c.name}</h4>
              <p>{c.email}</p>
            </div>
          </div>
          <button onClick={() => deleteContactHandler(c.id)}>delete</button>
        </div>
      ))}
    </section>
  );
};

export default ContactList;
