import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" width={40} />
          </Link>
          <h1>cTx Technologies &amp; Solutions Limited</h1>
        </div>
        <div className="nav-items">
          <ul>
            <Link to="/service">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </ul>
          <button className="btn">Let's Talk</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
