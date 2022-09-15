const ContactForm = () => {
  return (
    <section className="contact-form">
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Name..." />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" placeholder="Email..." />
        <button>add</button>
      </form>
    </section>
  );
};

export default ContactForm;
