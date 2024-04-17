import "./Newsletter.css";

function Newsletter() {
  return (
    <section>
      <div className="news-container">
        <div className="items">
          <h2>Subscribe to Newsletter</h2>
          <p>
            Enter your email address to register to our newsletter subscription!
          </p>
          <input type="email" placeholder="Email" />
        </div>
        <button className="btn">send message</button>
      </div>
    </section>
  );
}

export default Newsletter;
