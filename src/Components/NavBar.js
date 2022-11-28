import { Link } from "react-router-dom";

import Logo from "../Assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-light ">
      <Link className="navbar-brand" to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-bs-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" href="#">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#" role="button">
              Resources
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              Our Pension
            </Link>
          </li>
        </ul>

        <div className="acc-btns">
          <Link className="logIn-btn">LOG IN</Link>
          <Link to="/create-account">
            <button className="signUp-btn">SIGN UP</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
