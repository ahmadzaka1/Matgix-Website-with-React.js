import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroBottom from '../components/HeroBottom'
import Card from '../components/Card'
import consultancy from '../images/consultancy-solutions.avif'
import customSolutions from '../images/custom-solutions.jpg'
import integration from '../images/integrations-solutions.png'
import CRMintegration from '../images/CRM-ERP.jpeg'
import production from '../images/update-technology.jpg'
import inventory from '../images/inventory-management-sol.avif'
import erpsolution from '../images/ERP-system-solution.jpg'

function ERP() {
  useEffect(() => {
    document.title = 'Best ERP Solutions';
  }, []);
  return (
    <div>
      <Header heading='ERP Development Services' title='Custom Solutions for Smooth Integration, Personalization, and Better Business Performance.' text1='For more info contact to our experts:'/>
      <div className='container'>
      <h3 style={{ textAlign: "center", marginTop: "120px" }}>
        OUR ERP DEVELOPMENT SERVICES
      </h3>
      <h6 style={{ textAlign: "center", marginTop: "20px" }}>
      A customized ERP system offers a comprehensive resource overview and advanced management tools. Our service includes expert guidance from consulting to ERP system development and implementation.
      </h6>
      </div>
      <div className="container">
        <div className="row">
          <Card
            
            imageUrl={consultancy}
            title="Consultancy"
            description="We approach it differently. Our products are designed to fit your unique requirements. We start with a consultation to determine your ERP needs and support you through the entire implementation."
          />
          <Card
            
            imageUrl={customSolutions}
            title="Customization"
            description=" We prioritize perfection in every feature of your custom ERP, with no preset limits. Whether you require unique features, advanced analytics, cloud-based accessibility, we implement them using cutting-edge technology."
          />
          <Card
            
            imageUrl={integration}
            title="Integrations"
            description="Once your ERP is developed, we handle the entire implementation process, including software installation, tool integration, and system setup, ensuring your ERP is fully operational and ready for use."
          />
          <Card
            
            imageUrl={CRMintegration}
            title="Integrating CRM"
            description="Integrate CRM seamlessly with your ERP system. Keep your customer data, marketing preferences, and campaign responses in one place for efficient insights and successful campaigns."
          />
          <Card
            
            imageUrl={production}
            title="Production Optimization"
            description="Our ERP system offers PPC features for comprehensive production management. Create custom production lines, manage stock, and track sales, all within the system for maximum efficiency."
          />
          <Card
            
            imageUrl={inventory}
            title="Inventory Control"
            description="Streamline your production by managing your inventory efficiently. Track parts, monitor stock levels, and set automatic reorder alerts to ensure you never run out of essential components."
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{ marginTop: "120px", marginBottom: "20px", fontWeight: "bold" }}>
            Comprehensive ERP Services:
            </h4>
            <ul>
  <li style={{ marginBottom: '20px' }}>
    <b>Streamlined Operations:</b> ERP optimizes business processes, reducing redundancy and enhancing efficiency.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Data-Driven Decisions:</b> It provides real-time insights, enabling informed, data-backed decisions.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Improved Productivity:</b> ERP automates tasks, boosting employee productivity and morale.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Enhanced Customer Service:</b> Better data accessibility translates to superior customer support.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Scalability and Growth:</b> ERP accommodates business expansion, aiding long-term success.
  </li>
</ul>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={erpsolution}
              alt="CRM"
              style={{ height: "400px", width: "600px" }}
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
              Transform Business Operations and Data Analytics with our ERP Solutions.
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

export default ERP