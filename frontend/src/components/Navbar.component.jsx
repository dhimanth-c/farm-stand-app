import { useState } from "react";
import navbarLogo from "./../images/farmer2.png";

export default function Navbar() {
  const [formData, setFormData] = useState("");

  function handleChange(event) {
    setFormData(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <nav
      style={{ backgroundColor: "#8B9A46" }}
      className="navbar navbar-expand-md navbar-dark sticky-top"
    >
      <div className="container-fluid">
        <a className="navbar-brand px-3 mx-0" href="#">
          <div className="d-flex align-items-center">
            <img
              alt="..."
              width="24"
              height="24"
              src={navbarLogo}
              className="d-inline-block align-text-top"
            />
            <span className="navbar-text navbar-brand-text ms-1">
              Farmstand
            </span>
          </div>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link px-3 active" href="#">
                Stands
              </a>
            </li>
            <li>
              <a className="nav-link px-3" href="#">
                Feed
              </a>
            </li>
            <li>
              <a className="nav-link px-3" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="nav-link px-3" href="#">
                Contact
              </a>
            </li>
          </ul>
          <form className="d-flex mx-3" role="search" onSubmit={handleSubmit}>
            <input
              type="search"
              value={formData}
              onChange={handleChange}
              placeholder="Search farmstands"
              className="form-control text-dark me-2 navbar-text"
            />
            <button
              type="submit"
              style={{ backgroundColor: "#eee" }}
              className="btn text-dark navbar-text"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
