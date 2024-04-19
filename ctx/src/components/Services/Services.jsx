import { serviceProvided } from "../../assets/data";
import "./Services.css";

function Services() {
  return (
    <section>
      <div className="service-container">
        <div className="container">
          <h2>Services we provide</h2>
          <div className="card">
            {serviceProvided.map((service) => {
              return (
                <div key={"id"} className="card-item">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
