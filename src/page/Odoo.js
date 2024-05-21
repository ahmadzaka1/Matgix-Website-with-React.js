import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import odoo_erp from "../images/odoo_erp.webp";
import boostSales from "../images/boostSales.PNG";
import integrate from "../images/integrateServices.PNG";
import streamline from "../images/streamlineOperations.PNG";
import website from "../images/websiteBuilder.PNG";
import finances from "../images/manageFinances.PNG";
import marketing from "../images/amplifyMarketing.PNG";
import customizeDevelop from "../images/customizeDevelop.PNG";
import Cardsmall from "../components/Cardsmall";
import { Link } from "react-router-dom";
import screensMockup from "../images/screensMockup.png";
import odoo2 from '../images/odoo2.svg'

function Odoo() {
  useEffect(() => {
    document.title = 'Odoo CRM And ERP';
  }, []);
  return (
    <div>
      <Header
        heading="Odoo: Business Simplified"
        title="Streamline Your Business with Odoo's All-in-one Software"
        text1="For more info contact to our experts:"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2
              style={{
                marginTop: "120px",
                marginBottom: "8px",
                fontWeight: "bold",
              }}
            >
              Odoo ERP
            </h2>
            <h5 style={{ fontSize: "17px", fontFamily: "monospace" }}>
              Amazing employees deserve amazing software.
            </h5>
            <h6 style={{ fontSize: "16px", fontFamily: "monospace" }}>
              The only platform you will ever need to help run your business:
              integrated apps, kept simple, and loved by millions of happy
              users.
            </h6>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={odoo_erp}
              alt="ERPSolution"
              style={{ height: "400px", width: "500px" }}
            />
          </div>
        </div>
      </div>
      <h3
        style={{
          textAlign: "center",
          marginTop: "120px",
          marginBottom: "60px",
        }}
      >
        An App For Every Need
      </h3>
      <div className="container">
        <div className="row">
          <Cardsmall imageUrl={boostSales} title="BOOST YOUR SALES" />
          <Cardsmall imageUrl={integrate} title="INTEGRATE YOUR SERVICES" />
          <Cardsmall imageUrl={streamline} title="STREAMLINE OPERATIONS" />
          <Cardsmall imageUrl={website} title="BUILD STUNNING WEBSITES" />
          <Cardsmall imageUrl={finances} title="MANAGE YOUR FINANCES" />
          <Cardsmall imageUrl={marketing} title="AMPLIFY YOUR MARKETING" />
          <Cardsmall imageUrl={customizeDevelop} title="CUSTOMIZE & DEVELOP" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 d-flex justify-content-start align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={screensMockup}
              alt="screen"
              style={{
                height: "400px",
                width: "500px",
              }}
            />
          </div>
          <div className="col-md-6">
            <h4
              style={{
                marginTop: "120px",
                marginBottom: "8px",
                fontWeight: "bold",
              }}
            >
              No more painful integrations.
            </h4>
            <p
              style={{
                marginBottom: "8px",
                color: "#36454F",
                fontSize: "16px",
                fontFamily: "monospace",
              }}
            >
              If you have individual software solutions that work, but don't
              talk to each other, you are probably entering things more than
              once and missing a comprehensive overview of what's going on.
            </p>
            <p
              style={{
                marginBottom: "8px",
                color: "#36454F",
                fontSize: "16px",
                fontFamily: "monospace",
              }}
            >
              Between the Odoo apps and the tens of thousands of Community apps,
              there is something to help address all of your business needs in a
              single, cost-effective and modular solution: no more work to get
              different technology cooperating.
            </p>
            <p
              style={{
                marginBottom: "8px",
                color: "#36454F",
                fontSize: "16px",
                fontFamily: "monospace",
              }}
            >
              Odoo apps are perfectly integrated with each other, allowing you
              to fully automate your business processes and reap the savings and
              benefits.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4
              style={{
                marginTop: "120px",
                marginBottom: "8px",
                fontWeight: "bold",
              }}
            >
              A unique value proposition
            </h4>
            <p
              style={{
                marginBottom: "8px",
                color: "#36454F",
                fontSize: "16px",
                fontFamily: "monospace",
              }}
            >
              Our family of apps works seamlessly together - giving you the
              ability to automate and track everything you do - centralized,
              online, and accessible from anywhere with any device.
            </p>
            <p
              style={{
                marginBottom: "8px",
                color: "#36454F",
                fontSize: "16px",
                fontFamily: "monospace",
              }}
            >
              The open-source development model of Odoo has allowed us to
              leverage thousands of developers and business experts to build the
              world's largest ecosystem of fully integrated business apps.{" "}
            </p>
            <p
              style={{
                marginBottom: "8px",
                color: "#36454F",
                fontSize: "16px",
                fontFamily: "monospace",
              }}
            >
              With a modern and elegant technical design, Odoo's framework is
              unique. It allows us and our community developers to provide
              top-notch usability that scales across all apps.{" "}
            </p>
            <p
              style={{
                marginBottom: "8px",
                color: "#36454F",
                fontSize: "16px",
                fontFamily: "monospace",
              }}
            >
              Usability improvements made to Odoo will be automatically applied to all of our integrated apps.
            </p>
            
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={odoo2}
              alt="ERPSolution"
              style={{ height: "400px", width: "500px" }}
            />
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "120px" }}>
        <div
          className="card"
          style={{
            width: "100%",
            boxShadow: "0px 5px 5px -5px rgba(0,0,0,0.75)",
          }}
        >
          <div className="card-body">
            <h4 className="card-title">Got A Project In Mind?</h4>

            <p
              className="card-text"
              style={{ fontSize: "16px", color: "#36454F" }}
            >
              Let's Talk and Get Started!
            </p>
            <Link to="/Contact">
              <button className="btn button btn-sm rounded-pill" type="submit">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Odoo;
