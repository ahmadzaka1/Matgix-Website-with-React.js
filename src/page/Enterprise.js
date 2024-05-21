import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import erpnext from '../images/erpnext-hero.png'
import accounting from '../images/budget.png'
import order from '../images/order-manage.png'
import payroll from '../images/payday.png'
import manufacturing from '../images/manufacturing.png'
import crm from '../images/crm.png'
import projects from '../images/idea.png'
import helpdesk from '../images/help-desk.png'
import asset from '../images/money-management.png'
import website from '../images/web-link.png'
import ERPNextCard from '../components/ERPNextCard'
import odoo_erp from "../images/odoo_erp.webp";
import boostSales from "../images/boostSales.PNG";
import integrate from "../images/integrateServices.PNG";
import streamline from "../images/streamlineOperations.PNG";
import websiteBuilder from "../images/websiteBuilder.PNG";
import finances from "../images/manageFinances.PNG";
import marketing from "../images/amplifyMarketing.PNG";
import customizeDevelop from "../images/customizeDevelop.PNG";
import Cardsmall from "../components/Cardsmall";
import screensMockup from "../images/screensMockup.png";
import odoo2 from '../images/odoo2.svg'
import { Link } from 'react-router-dom'
import HeroBottom from '../components/HeroBottom'

function Enterprise() {
  useEffect(() => {
    document.title = 'ERP Software Development';
  }, []);
  return (
    <div>
      <Header  heading='Enterprise Software Development' title='Boost productivity with our customized ERP software development.' text1='For more info contact to our experts:'/>
      <h1 style={{textAlign: 'center', marginTop: '60px'}}>ERPNext: Business Efficiency Redefined</h1>
      <h5 style={{textAlign: 'center'}}>Optimize Your Operations with Powerful and User Friendly ERP Software</h5>
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
              The most agile ERP on the planet
            </h2>
            <h5>
            Complete, versatile and powerful.
            
            </h5>
            <h6>
            ERPNext is the world's best free and open source ERP.
            </h6>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={erpnext}
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
        Almost everything you need
      </h3>
      <div className="container">
        <div className="row">
          <ERPNextCard imageUrl={accounting} title="FINANCIAL ACCOUNTING" />
          <ERPNextCard imageUrl={order} title="ORDER MANAGEMENT" />
          <ERPNextCard imageUrl={payroll} title="HR AND PAYROLL" />
          <ERPNextCard imageUrl={manufacturing} title="MANUFACTURING" />
          <ERPNextCard imageUrl={crm} title="CRM" />
          <ERPNextCard imageUrl={projects} title="PROJECTS" />
          <ERPNextCard imageUrl={helpdesk} title="HELP DESK" />
          <ERPNextCard imageUrl={asset} title="ASSET MANAGEMENT" />
          <ERPNextCard imageUrl={website} title="WEBSITE" />
        </div>
      </div>
      <h1 style={{textAlign: 'center', marginTop: '120px'}}>Odoo: Business Simplified</h1>
      <h5 style={{textAlign: 'center'}}>Streamline Your Business with Odoo's All-in-one Software</h5>
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
            <h5>
              Amazing employees deserve amazing software.
            </h5>
            <h6>
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
          <Cardsmall imageUrl={websiteBuilder} title="BUILD STUNNING WEBSITES" />
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
      <div className='container'>
      <h2
              style={{
                marginTop: "120px",
                marginBottom: "8px",
                fontWeight: "bold",
                textAlign: 'center'
              }}
            >
              Create a custom ERP Software that adds value
            </h2>
            <h5 style={{textAlign: 'center'}}>
              We’re industry leaders when it comes to creating custom solutions to develop products for rapidly evolving markets.
            </h5>
            <HeroBottom/>
            </div>
      <Footer/>
    </div>
  )
}

export default Enterprise