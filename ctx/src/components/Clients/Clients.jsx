import "./Clients.css";
import img1 from "../../assets/images/client-logo-1.png";
import img2 from "../../assets/images/client-logo-2.png";
import img3 from "../../assets/images/client-logo-3.png";
import img4 from "../../assets/images/client-logo-4.png";
import img5 from "../../assets/images/client-logo-5.png";
import img6 from "../../assets/images/client-logo-6.png";
import img7 from "../../assets/images/client-logo-7.png";
import img8 from "../../assets/images/client-logo-8.png";

function Clients() {
  return (
    <section>
      <div className="client-container">
        <div className="container">
          <h2>Our Clients</h2>
          <div className="grid-item">
            <img src={img1} alt="client-1" />
            <img src={img2} alt="client-2" />
            <img src={img3} alt="client-3" />
            <img src={img4} alt="client-4" />
            <img src={img5} alt="client-5" />
            <img src={img6} alt="client-6" />
            <img src={img7} alt="client-7" />
            <img src={img8} alt="client-8" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
