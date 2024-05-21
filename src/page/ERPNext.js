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
import { Link } from 'react-router-dom'
function ERPNext() {
  useEffect(() => {
    document.title = 'The Most Agile ERP - ERPNext';
  }, []);
  return (
    <div>
      <Header heading='ERPNext: Business Efficiency Redefined' title="Optimize Your Operations with Powerful and User Friendly ERP Software" text1='For more info contact to our experts:'/>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1
              style={{
                marginTop: "120px",
                marginBottom: "8px",
                fontWeight: "bold",
              }}
            >
              The most agile ERP on the planet
            </h1>
            <h4 style={{ fontSize: "17px", fontFamily: "monospace" }}>
            Complete, versatile and powerful.
            
            </h4>
            <h4 style={{ fontSize: "16px", fontFamily: "monospace" }}>
            ERPNext is the world's best free and open source ERP.
            </h4>
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
      <Footer/>
    </div>
  )
}

export default ERPNext