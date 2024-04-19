import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="page-container">
      <div className="container">
        <div className="contact-flex">
          <div className="contact-item">
            <h2>Let's stay in touch</h2>
            <p>
              We are a customer-focused IT enterprise solutions company that is
              passionate about helping businesses achieve their goals. Our team
              of seasoned professionals is dedicated to providing you with the
              best enterprise software, IT consulting, and cloud solutions that
              meet your unique business needs. We are always here to listen to
              your inquiries, comments, and feedback. Please feel free to reach
              out to us by phone, email, or through our contact form. We look
              forward to hearing from you!
            </p>
          </div>
          <div className="contact-form">
            <form action="">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" />
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </form>
            <button className="btn">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
