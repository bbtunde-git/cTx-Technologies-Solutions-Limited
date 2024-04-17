import img1 from "../../assets/images/service-img.png";
import img2 from "../../assets/images/service-img-2.png";
import "./Section.css";

function Section() {
  return (
    <section>
      <div className="section-container">
        <div className="container">
          <div className="flex-1">
            <div className="flex-item">
              <h2>Streamlining Operations with Enterprise Software</h2>
              <p>
                Discover how we helped a major manufacturing company optimize
                their operations with a custom enterprise software solution,
                resulting in a 40% increase in efficiency and substantial cost
                savings.
              </p>
              <ul>
                <li>Custom enterprise software solution</li>
                <li>40% increase in efficiency</li>
              </ul>
              <button className="btn">read more</button>
            </div>
            <img src={img1} alt="service-image" />
          </div>
          <div className="flex-2">
            <img src={img2} alt="service-image2" />
            <div className="flex-item">
              <h2>Maximizing IT Efficiency with Cloud Solutions</h2>
              <p>
                Learn how we helped a financial services company enhance their
                IT efficiency and reduce costs with a cloud-based solution,
                leading to a 50% reduction in IT expenses and improved business
                agility.
              </p>
              <ul>
                <li>Cloud-based solution</li>
                <li>50% reduction in IT expenses</li>
              </ul>
              <button className="btn">read more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
