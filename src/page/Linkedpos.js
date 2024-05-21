import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaDesktop, FaPersonBooth, FaRegHandPointRight, FaThinkPeaks, FaToggleOn } from 'react-icons/fa';
import features_pos from '../images/features_pos.png';
import access_without_boundaries from '../images/access-without-boundaries.png'
import design from '../images/choose-your-design.png'
import tone from '../images/set-the-tone.png'
import reports from '../images/reports-view.png'
import { Link } from "react-router-dom";
import HeroBottom from '../components/HeroBottom'

function Linkedpos() {
  useEffect(() => {
    document.title = 'Point Of Sale Software Development';
  }, []);
  return (
    <div>
      <Header heading='Linked POS Management System'  title='Elevate Your Business Growth with User-Friendly Point of Sale Software.' text1='For more info contact to our experts:'/>
      <h3 style={{ textAlign: "center", margin: "60px" }}>
        OUR POINT OF SALE SOFTWARE SOLUTION
      </h3>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{ marginTop: "60px", marginBottom: "8px", fontWeight: "bold" }}>
            <FaThinkPeaks /> Why LinkedPOS?
            </h4>
            <ul>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
                Access without boundaries
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
                Sales returns / Purchase returns
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
                Supplier Accounts / Customer accounts
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
                Double Entry Accounting
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
                VAT and Taxes (Invoice and Items)
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
                Discounts (Invoice and Items)
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
                Loyalty programs
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
                Daily expenses
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
                Online and offline purchases
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
                Multiple Reports
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
                Owners investments and drawings
              </li>
            </ul>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "60px" }}
          >
            <img
              src={features_pos}
              alt="ERPSolution"
              style={{ height: "400px", width: "600px" }}
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
              src={access_without_boundaries}
              alt="OurTeam"
              style={{
                height: "400px",
                width: "500px",
              }}
            />
          </div>
          <div className="col-md-6">
            <h4 style={{ marginTop: "120px", marginBottom: "8px", fontWeight: "bold" }}>
            <FaPersonBooth />  Access without boundaries
            </h4>
            <ul>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
                LinkedPOS is simple to download and install, giving you free
                direct access to its main features in minutes.
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
                Functionality is key; any software system you introduce has to
                be user friendly. That’s why we have created a generous amount
                of easy to use layouts for you to choose from to run your
                business. This enables you to instantly operate our software due
                to its easy to use, ergonomic design and magnitude of flexible
                features.
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
                Benefit your business by being able to communicate around the
                world, broaden your horizons, and reach out with our multiple
                language options.
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
                Introducing LinkedPOS into your business will instantly take a
                world of problems off your shoulders, giving you easy and
                affordable point of sales and inventory management system
                solutions.
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4 style={{ marginTop: "120px", marginBottom: "8px", fontWeight: "bold" }}>
            <FaDesktop />  Choose your design
            </h4>
            <p style={{ marginBottom: "8px", color: "#36454F", fontSize: '16px' }}>
              Running a business? You need fast and accurate operation systems
              which work with you, not against you. Your point of sales system
              is key in helping you to create the right process for the
              management of your staff and stock. LinkedPOS provides numerous
              sales terminal layouts so you can find the right one for your
              business. All of our layouts provide private settings and features
              for each of your sales terminals. Whether you are a small high
              street shop or a large department store, you will find a layout
              that fits your business’ purpose. Simply look through the layout
              options and start using them instantly. However, if any of our
              existing layouts don’t hit the mark, please do not hesitate to
              contact us. We will do all we can to meet your inventory
              management systems and point of sale software needs.
            </p>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={design}
              alt="Design"
              style={{ height: "400px", width: "500px" }}
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
              src={tone}
              alt="OurTeam"
              style={{
                height: "400px",
                width: "500px",
              }}
            />
          </div>
          <div className="col-md-6">
            <h4 style={{ marginTop: "120px", marginBottom: "8px", fontWeight: "bold" }}>
             <FaToggleOn />  Set the tone
            </h4>
            <p style={{ marginBottom: "8px", color: "#36454F" , fontSize: '16px' }}>
              We have gone that one step further, not only integrating smart
              solutions that help you to facilitate efficient business
              management, but making it unique to you. Our software offers the
              user a personalised experience by allowing you to set the colour,
              themes, and more for the skin of your LInkedPOS user interface.
              Allowing your systems to disguise themselves, as well as adapt to
              whoever is using them, is one of the unique and powerful features.
              What if an employee is colour blind, has an eye condition, or is
              weak sighted? With our software, you can select the user
              interfaces and choose the skin, colours, font size, and text which
              meet the individual needs of your business and employees.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{ marginTop: "120px", marginBottom: "8px", fontWeight: "bold" }}>
            <FaRegHandPointRight/> Reports your fingertips
            </h4>
            <ul>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
              Item List / Item Stock List / Items Understock List
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
              Product List (Combo Deals)
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
              Purchse / Sales Order
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
              Purchase / Sales Return
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
              Balce Sheet
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
              Income Statement
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
              Cash Flow              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
              Sales Tax on purchases
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
              Sales Tax on sales
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
              Expenses
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
              Discounts
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
              Customer / Supplier Statement
              </li>
              <li style={{ marginBottom: "8px", color: "#36454F" }}>
              Properties / Plant and Equipment
              </li>
            </ul>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={reports}
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
              Create a User-Friendly Point Of Sale Software For Your Business
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

export default Linkedpos