import userimg from "./../../assets/images/user.png";
const ContactList = () => {
  return (
    <section className="contact-list">
      <div className="contact">
        <div className="contact__desc">
          <img src={userimg} alt="user" />
          <div>
            <h4 className="contact__desc-name">name</h4>
            <p>email</p>
          </div>
        </div>
        <div>delete</div>
      </div>
    </section>
  );
};

export default ContactList;
