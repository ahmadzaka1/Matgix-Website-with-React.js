import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroBottom from '../components/HeroBottom'
import Card from '../components/Card'
import consultancy from '../images/consultancy-solutions.avif'
import custom from '../images/custom-development.jpeg'
import implement from '../images/update-technology.jpg'
import kanban from '../images/kanban-view.webp'
import success from '../images/success-solution.avif'
import AI from '../images/AI-solution.png'
import pms from '../images/pms-solution.png'

function ProjectManagementSystem() {
  useEffect(() => {
    document.title = 'Project Management System';
  }, []);
  return (
    <div>
      <Header heading='Project Management System Development' title='Empower Your Team Projects with Effective Project Management Solutions.' text1='For more info contact to our experts:'/>
      <div className='container'>
      <h3 style={{ textAlign: "center", marginTop: "120px" }}>
      Our Project Management Services
      </h3>
      <h6 style={{ textAlign: "center", marginTop: "20px" }}>
      Manage complex projects with ease using our customizable solutions for total control and flexibility.
      </h6>
      </div>
      <div className="container">
        <div className="row">
          <Card
            
            imageUrl={consultancy}
            title="Consultancy"
            description="Get a custom project management system customized to your business's unique needs for seamless integration and maximum efficiency."
          />
          <Card
            
            imageUrl={custom}
            title="Custom Development"
            description="Get top-quality, tailored development with cutting-edge technology, whether it's special features, mobile accessibility, or advanced AI tools."
          />
          <Card
            
            imageUrl={implement}
            title="Smooth Implementation"
            description="Efficient and flawless implementation of your custom PMS into your business environment is key to ensuring that it operates seamlessly."
          />
          <Card
            
            imageUrl={kanban}
            title="Visual Efficiency"
            description="Enhance project management with a highly customizable and visually intuitive Kanban system, tailored to your unique requirements."
          />
          <Card
            
            imageUrl={success}
            title="Measure Success"
            description="Empower your business with advanced project management solutions designed to enhance performance measurement and meet deadlines effortlessly."
          />
          <Card
            
            imageUrl={AI}
            title="Optimize Efficiency"
            description="AI-Powered Analysis Pinpoints Operational Weaknesses for Streamlined Optimization, Harnessing the Expertise of Our AI Specialists."
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{ marginTop: "120px", marginBottom: "20px", fontWeight: "bold" }}>
            Efficient Project Management Solutions:
            </h4>
            <ul>
  <li style={{ marginBottom: '20px' }}>
    <b>Enhanced Efficiency:</b> Project management software streamlines tasks and communication, improving overall productivity.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Improved Collaboration:</b> It fosters better collaboration among team members, enabling them to work together seamlessly.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Effective Resource Management:</b> The software helps allocate resources efficiently, minimizing waste and maximizing utilization.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Real-Time Monitoring:</b> It provides real-time project tracking, allowing for timely adjustments to meet deadlines.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Data-Driven Decision-Making:</b> Access to project data and analytics empowers data-driven decision-making for better outcomes.
  </li>
</ul>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={pms}
              alt="project management"
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
              Elevate Project Management with a Custom System
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

export default ProjectManagementSystem