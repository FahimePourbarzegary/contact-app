import { useLocation } from "react-router-dom";
import "./ContactDetail.css";
const ContactDetail = () => {
  const location = useLocation();
  return (
    <section className="container contact-detail">
      <p> name:{location.state.name}</p>
      <p> email:{location.state.email}</p>
    </section>
  );
};

export default ContactDetail;
