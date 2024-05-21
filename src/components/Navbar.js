import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <nav className="container navbar navbar-expand-lg bg-white fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand logo" to="/Home">
            MATGIX
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropbtn" to="/Services">
                  Services <i class="fa fa-caret-down"></i>
                </Link>
                <li class="dropdown-content">
                  <Link to="/Services/Enterprise">Enterprise Software Development</Link>
                  <Link to="/Services/Linkedpos">Linked POS Management System</Link>
                  <Link to="/Services/Social-Media-Marketing">Social Media Marketing</Link>
                  <Link to="/Services/Digital-Marketing">Digital Marketing</Link>
                  <Link to="/Services/Product-Engineering">Product Engineering</Link>
                  <Link to="/Services/MVP-Development">MVP Development</Link>
                </li>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropbtn" to="/Technologies">
                  Technologies <i class="fa fa-caret-down"></i>
                </Link>
                <li class="dropdown-content">
                  <Link to="/Technologies/Odoo">Odoo</Link>
                  <Link to="/Technologies/ERPNext">ERPNext</Link>
                  <Link to="/Technologies/Linked-POS">Linked POS</Link>
                </li>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropbtn" to="/Solutions">
                  Solutions <i class="fa fa-caret-down"></i>
                </Link>
                <li class="dropdown-content">
                  <Link to="/Solutions/CRM">CRM</Link>
                  <Link to="/Solutions/ERP">ERP</Link>
                  <Link to="/Solutions/Survey-Software">Survey Software</Link>
                  <Link to="/Solutions/Project-Management-System">Project Management System</Link>
                  <Link to="/Solutions/Restaurant-Management-System">Restaurant Management System</Link>
                  <Link to="/Solutions/Inventory-Management-System">Inventory Management System</Link>
                  <Link to="/Solutions/Hospital-Management-System">Hospital Management System</Link>
                  <Link to="/Solutions/School-Management-System">School Management System</Link>
                  <Link to="/Solutions/HR-Management-System">HR Management System</Link>
                </li>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropbtn" to="/Industries">
                  Industries <i class="fa fa-caret-down"></i>
                </Link>
                <li class="dropdown-content">
                  <Link to="/Industries/Healthcare">Healthcare</Link>
                  <Link to="/Industries/Retail-And-Ecommerce">Retail & Ecommerce</Link>
                  <Link to="/Industries/Sports-And-Entertainment">Sports & Entertainment</Link>
                  <Link to="/Industries/Construction">Construction</Link>
                  <Link to="/Industries/Insurance">Insurance</Link>
                  <Link to="/Industries/Travel-And-Hospitality">Travel & Hospitality</Link>
                </li>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropbtn" to="/Company">
                  Company <i class="fa fa-caret-down"></i>
                </Link>
                <li class="dropdown-content">
                  <Link to="/Company/AboutUs">About Us</Link>
                  <Link to="/Company/OurTeam">Our Team</Link>
                  <Link to="/Company/Careers">Careers</Link>
                </li>
              </li>
            </ul>
            <form className="d-flex">
              <Link to="/Contact"><button className="btn button rounded-pill" type="submit">
                Contact Us
              </button></Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
