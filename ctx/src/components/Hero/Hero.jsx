import img1 from "../../assets/images/hero-img.png";
import "./Hero.css";

function Hero() {
  return (
    <section>
      <div className="hero-container">
        <div className="container">
          <h1>Welcome to cTx Technologies &amp; Solutions Limited</h1>
          <p>
            We are an information technology services company that provides
            comprehensive IT solutions to businesses of all sizes. Our team of
            experts specializes in delivering enterprise software, IT
            consulting, cloud solutions, and more to help our clients streamline
            their operations and achieve their goals.
          </p>
          <img src={img1} alt="hero-image" />
          <div className="hero-button">
            <button className="btn">learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
