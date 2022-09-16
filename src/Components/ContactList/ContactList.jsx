import { Link } from "react-router-dom";
import userimg from "./../../assets/images/user.png";
import "./ContactList.css";
const ContactList = ({
  contacts,
  deleteContactHandler,
  searchContactHandler,
}) => {
  const onChangeHandler = (e) => {
    searchContactHandler(e.target.value);
  };
  return (
    <section className="contact-list">
      <div className="contact-list__add">
        <Link to="/add">
          <button className="contact-list__add-btn">Add New Contact</button>
        </Link>
      </div>
      <div>
        <input type="text" placeholder="Search..." onChange={onChangeHandler} />
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
          <div className="contact__desc">
            <Link
              to={`edit/${c.id}`}
              state={{ name: c.name, id: c.id, email: c.email }}
            >
              <button>edit</button>
            </Link>
            <Link
              to={`user/${c.id}`}
              state={{ name: c.name, id: c.id, email: c.email }}
            >
              <button>detail</button>
            </Link>
            <button onClick={() => deleteContactHandler(c.id)}>delete</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ContactList;
