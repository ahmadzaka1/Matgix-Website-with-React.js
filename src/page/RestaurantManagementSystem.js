import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import HeroBottom from '../components/HeroBottom'
import consultancy from '../images/consultancy-solutions.avif'
import pos from '../images/restaurant-solution-pos.webp'
import implement from '../images/update-technology.jpg'
import efficient from '../images/efficient-restaurant-solution.jpg'
import inventory from '../images/restaurant-inventory-solution.jpg'
import data from '../images/analyzing-data.jpg'
import restaurant from '../images/restaurant-management-system.png'

function RestaurantManagementSystem() {
  useEffect(() => {
    document.title = 'Restaurant Management System';
  }, []);
  return (
    <div>
      <Header heading='Restaurant Management System Development' title='Efficiently Manage Your Restaurant Operations with Our System' text1='For more info contact to our experts:'/>
      <div className='container'>
      <h3 style={{ textAlign: "center", marginTop: "120px" }}>
      Our Restaurant Management System
      </h3>
      <h6 style={{ textAlign: "center", marginTop: "20px" }}>
      Streamline restaurant operations, handle online orders, and tackle marketing challenges efficiently with our automated restaurant management software.
      </h6>
      </div>
      <div className="container">
        <div className="row">
          <Card
            
            imageUrl={consultancy}
            title="Consultancy"
            description="Our experts collaborate with you to define the unique features and design your restaurant management software requires, providing a tailored blueprint for our developers."
          />
          <Card
            
            imageUrl={pos}
            title="Custom Development"
            description="Our expert software developers bring the blueprint to life with cutting-edge technologies and ensure compatibility and usage across devices before implementation."
          />
          <Card
            
            imageUrl={implement}
            title="Smooth Implementation"
            description="We'll be by your side throughout the process, from installing computers and the software to ensuring everything runs smoothly. You can expect a hassle-free start from day one."
          />
          <Card
            
            imageUrl={efficient}
            title="Efficient System"
            description="Effortlessly manage employees with our restaurant management system, schedule their duties, track availability, and handle payroll and vacations with a click."
          />
          <Card
            
            imageUrl={inventory}
            title="Inventory Control"
            description="Effortlessly manage your inventory, keep a close eye on stock levels, make menu updates, automate restocking, prevent lost orders, and streamline online order management."
          />
          <Card
            
            imageUrl={data}
            title="Analyzing Data"
            description="Automate financial reporting and gain valuable insights to enhance restaurant operations. Easily track dish performance, monitor employee and supplier expenses."
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{ marginTop: "120px", marginBottom: "20px", fontWeight: "bold" }}>
            
Enhance restaurant efficiency with ease:
            </h4>
            <ul>
  <li style={{ marginBottom: '20px' }}>
    <b>Efficient Operations:</b> Streamline restaurant operations, including inventory management and staff scheduling, reducing costs.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Improved Service:</b> Enhance customer service with digital order management, ensuring faster and more accurate service.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Data-Driven Insights:</b> Gain valuable insights into dish performance, cost control, and overall efficiency for data-informed decisions.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Precise Inventory Control:</b> Maintain real-time stock visibility, automate restocking, and prevent order losses.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Savings in Time and Costs:</b> Automate tasks to save time, reduce labor expenses, and boost productivity.
  </li>
</ul>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={restaurant}
              alt="restaurant management"
              style={{ height: "400px", width: "500px" }}
            />
          </div>
        </div>
      </div>
      <div className='container'>
      <h3
              style={{
                marginTop: "120px",
                marginBottom: "8px",
                fontWeight: "bold",
                textAlign: 'center'
              }}
            >
              Elevate your restaurant's productivity effortlessly with our software solution.
            </h3>
            <h5 style={{textAlign: 'center'}}>
              We’re industry leaders when it comes to creating custom solutions to develop products for rapidly evolving markets.
            </h5>
            <HeroBottom/>
            </div>
      <Footer/>
    </div>
  )
}

export default RestaurantManagementSystem