import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroBottom from '../components/HeroBottom'
import Card from '../components/Card'
import consultancy from '../images/consultancy-solutions.avif'
import custom from '../images/custom-hrms.jpeg'
import implement from '../images/implement-hrms.avif'
import efficiency from '../images/efficiency-hrms.jpg'
import data from '../images/analyzing-data.jpg'
import cloud from '../images/cloud-hrms.jpg'
import hrms from '../images/hrms-benefit.jpg'

function HRManagementSystem() {
  useEffect(() => {
    document.title = 'Human Resource Management System';
  }, []);
  return (
    <div>
      <Header heading='HR Management System Development' title='Enhance Workforce Efficiency with Our Robust HR Management System.' text1='For more info contact to our experts:'/>
      <div className='container'>
      <h3 style={{ textAlign: "center", marginTop: "120px" }}>
      Our Human Resources Management System
      </h3>
      <h6 style={{ textAlign: "center", marginTop: "20px" }}>
      Streamline HR tasks and optimize workforce management with our Human Resource Management System. Simplify employee records, payroll, and recruitment for enhanced organizational efficiency
      </h6>
      </div>
      <div className="container">
        <div className="row">
          <Card
            
            imageUrl={consultancy}
            title="Consultancy"
            description="Customize your Human Resource Management System to align seamlessly with your organization's unique needs. Our team of experts performs a thorough analysis to identify critical features for an advanced HR solution."
          />
          <Card
            
            imageUrl={custom}
            title="Custom Development"
            description="In the realm of Human Resource Management, we craft solutions for your exact needs. We leverages cutting-edge technology, cloud-based platforms, and responsive design to provide a seamlessly integrated experience."
          />
          <Card
            
            imageUrl={implement}
            title="Smooth Implementation"
            description="We analyze your HR needs and incorporate distinctive features, advanced data analytics, a cloud-based solution, and responsive design for a cohesive experience in your HR processes"
          />
          <Card
            
            imageUrl={efficiency}
            title="Efficiency"
            description="Streamline your HR operations with our cutting-edge HR Management System. Simplify recruitment, performance evaluations, and employee data management for increased efficiency."
          />
          <Card
            
            imageUrl={data}
            title="Insights"
            description="Gain valuable insights into your workforce through advanced data analytics. Make informed decisions, enhance employee engagement, and drive organizational growth in your system."
          />
          <Card
            
            imageUrl={cloud}
            title="Cloud-Based Solution"
            description="Access your HR data from anywhere with confidence. Our cloud-based HR system ensures data security, scalability, and the flexibility to adapt to your growing business needs."
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{ marginTop: "120px", marginBottom: "20px", fontWeight: "bold" }}>
            
            Enhancing HR Operations With Our ERP solutions:
            </h4>
            <ul>
  <li style={{ marginBottom: '20px' }}>
    <b>Streamlined HR Processes:</b> Our HRMS simplifies and automates your HR tasks, from onboarding to payroll, making processes more efficient.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Enhanced Workforce Management:</b> Effectively manage your workforce, from tracking attendance to evaluating performance, for better productivity.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Improved Employee Engagement:</b> Foster employee satisfaction with tools for feedback, performance reviews, and professional development.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Data-Driven HR Insights:</b> Leverage data analytics to gain insights for informed HR decisions, strategic planning, and business growth.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Seamless Communication:</b> Facilitate communication between HR, management, and employees, promoting better understanding and engagement.
  </li>
</ul>

          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={hrms}
              alt="hrms"
              style={{ height: "500px", width: "550px" }}
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
             Modern HR Management System for Streamlined Administration and Optimization
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

export default HRManagementSystem