import Newsletter from "../components/Newsletter/Newsletter";
import Clients from "../components/Clients/Clients";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Section from "../components/Section/Section";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Newsletter />
      <Section />
      <Clients />
    </>
  );
}

export default Home;
