import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ERPSolution from "../images/ERPSolution.webp";
import OurTeam from "../images/OurTeam.webp";

function Comp() {
  useEffect(() => {
    document.title = 'Custom ERP, POS And Application Development Company ';
  }, []);
  return (
    <div>
      <Header
        heading="About Our Company"
        title="We're a software development company specializing in custom ERP and application solutions."
        text1="For more info contact to our experts:"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{ marginTop: "60px" }}>About Us</h4>
            <h6 style={{marginBottom: '20px' , lineHeight: 2}}>
              We're a digital transformation consultancy and engineering
              company, revolutionizing businesses worldwide. Since 2017, we've
              empowered companies, startups, and established brands with
              innovative ERP solutions, driving their digital transformation
              journey.
            </h6>
            <p>
              For more info visit:{" "}
              <Link to="/Company/AboutUs">
                <button
                  className="btn button btn-sm rounded-pill"
                  type="submit"
                >
                  About Us
                </button>
              </Link>
            </p>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "60px" }}
          >
            <img
              src={ERPSolution}
              alt="ERPSolution"
              style={{ height: "300px", width: "350px" }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 d-flex justify-content-start align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={OurTeam}
              alt="OurTeam"
              style={{ height: "300px", width: "400px" , boxShadow: "0px 5px 5px -5px rgba(0,0,0,0.75)" }}
            />
          </div>
          <div className="col-md-6">
            <h4 style={{ marginTop: "120px" }}>Our Team</h4>
            <h6 style={{marginBottom: '20px' , lineHeight: 2}}>
              We're a dedicated team of experienced consultants and developers,
              experts in driving digital transformation. Our focus is on
              delivering innovative solutions that meet your business needs and
              exceed expectations. From optimizing processes to enhancing
              security, we're committed to excellence in every project.
            </h6>
            <p>
              For more info visit:{" "}
              <Link to="/Company/OurTeam">
                <button
                  className="btn button btn-sm rounded-pill"
                  type="submit"
                >
                  Our Team
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "120px" }}>
        <div className="card" style={{ width: "100%" , boxShadow: "0px 5px 5px -5px rgba(0,0,0,0.75)" }}>
          <div className="card-body">
            <h4 className="card-title">Careers</h4>
            
            <p className="card-text" style={{ fontSize: "16px", color: "#36454F" }}>
              We're a dynamic team of software engineers shaping the future with
              innovative ideas and tech. Join us for exciting career growth
              opportunities and be a part of our journey in redefining what's
              possible in the tech world.
            </p>
            <Link to="/Company/Careers">
                <button
                  className="btn button btn-sm rounded-pill"
                  type="submit"
                >
                  Join Us!
                </button>
              </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Comp;
