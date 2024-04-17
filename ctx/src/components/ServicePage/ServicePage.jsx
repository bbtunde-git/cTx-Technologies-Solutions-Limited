import "./ServicePage.css";
import { serviceProvided } from "../../assets/data";
import img1 from "../../assets/images/enterprise-service.png";
import img2 from "../../assets/images/IT-service.png";
import img3 from "../../assets/images/cloud-service.png";
import img4 from "../../assets/images/data-analytics.png";

function ServicePage() {
  return (
    <section>
      <div>
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

          <div className="spage-container">
            <div className="service-flex">
              <img src={img1} alt="Enterprise Service" />
              <div className="service-flex-item">
                <h2>Enterprise Software</h2>
                <p>
                  At cTx Technologies & Solutions Limited, we offer enterprise
                  software solutions that streamline your business processes,
                  improve collaboration, and enhance productivity. With our
                  in-depth knowledge of enterprise software and industry
                  expertise, we develop custom software solutions that meet your
                  unique business needs. Our software solutions range from
                  enterprise resource planning (ERP) systems, customer
                  relationship management (CRM) tools, supply chain management
                  systems, and project management tools. Our enterprise software
                  solutions are designed to increase your ROI, and we ensure
                  that they are scalable and adaptable to your changing business
                  needs.
                </p>
                <button className="btn">Read More</button>
              </div>
            </div>

            <div className="service-flex">
              <div className="service-flex-item">
                <h2>IT Consulting</h2>
                <p>
                  At cTx Technologies & Solutions Limited, our IT consulting
                  services provide expert guidance to help your organization
                  make informed decisions, reduce costs, and increase
                  efficiency. Our experienced IT consultants work closely with
                  your team to understand your business processes, technology
                  infrastructure, and goals. We provide customized
                  recommendations that align with your business objectives,
                  industry regulations, and technology trends. Our IT consulting
                  services cover a wide range of areas, including IT strategy,
                  risk management, compliance, procurement, and project
                  management. We help organizations identify new technology
                  trends and opportunities that can help them gain a competitive
                  edge in the market.
                </p>
                <button className="btn">Read More</button>
              </div>
              <img src={img2} alt="Enterprise Service" />
            </div>

            <div className="service-flex">
              <img src={img3} alt="Enterprise Service" />
              <div className="service-flex-item">
                <h2>Cloud Solutions</h2>
                <p>
                  At cTx Technologies & Solutions Limited, our cloud solutions
                  provide scalable, secure, and flexible cloud-based
                  infrastructure and applications that enable your organization
                  to be more agile, efficient, and cost-effective. We offer a
                  range of cloud solutions, including cloud infrastructure,
                  cloud migration, cloud security, and cloud application
                  development. Our cloud infrastructure solutions provide
                  scalable and secure cloud-based infrastructure that enables
                  your organization to be more agile and cost-effective. We help
                  you choose the right cloud platform for your organization’s
                  needs and provide end-to-end support, including cloud setup,
                  migration, and management.
                </p>
                <button className="btn">Read More</button>
              </div>
            </div>

            <div className="service-flex">
              <div className="service-flex-item">
                <h2>Data Analytics</h2>
                <p>
                  At cTx Technologies & Solutions Limited, our data analytics
                  services provide insights that help organizations make
                  informed decisions, optimize their operations, and gain a
                  competitive edge in the market. We offer a range of data
                  analytics services, including data warehousing, data mining,
                  data visualization, and predictive analytics. Our data
                  warehousing solutions help organizations store and manage
                  large amounts of data, providing a centralized repository for
                  data analysis. Our data mining solutions help organizations
                  discover patterns and insights from their data, enabling them
                  to make informed decisions. Our data visualization solutions
                  provide an intuitive and interactive way to understand complex
                  data, enabling organizations to uncover hidden insights.
                </p>
                <button className="btn">Read More</button>
              </div>
              <img src={img4} alt="Enterprise Service" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicePage;
