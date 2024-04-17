import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
