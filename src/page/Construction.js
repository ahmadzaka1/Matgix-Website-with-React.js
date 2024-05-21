import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroBottom from '../components/HeroBottom'
import ERPNextCard from '../components/ERPNextCard'
import erp from '../images/erp-construction.png'
import project from '../images/project-construction.png'
import inspection from '../images/inspection-construction.png'
import portal from '../images/portal-construction.png'
import integration from '../images/integration-construction.png'
import analyze from '../images/analyze-construction.png'
import construction from '../images/Construction-erp.jpg'

function Construction() {
  useEffect(() => {
    document.title = 'Construction Industry';
  }, []);
  return (
    <div>
      <Header heading='Construction Software Development' title='Streamline Construction Management with Our Customized Software Solutions.' text1='For more info contact to our experts:'/>
      <div className='container'>
      <h3 style={{ textAlign: "center", marginTop: "120px" }}>
      Construction Software Solutions
      </h3>
      <h6 style={{ textAlign: "center", marginTop: "20px" }}>
      We specialize in developing comprehensive software solutions customized to the unique needs of construction companies. With over a decade of experience, our team is dedicated to driving digital transformation, enhancing operational efficiency, and fostering innovation.
      </h6>
      </div>
      <div className="container">
        <div className="row">
          <ERPNextCard imageUrl={erp} title="ERP Software" description="Optimize your construction business with our unified custom solution. Streamline operations, enhance collaboration, and maximize efficiency. Enjoy a consistent user experience and improved visibility." />
          <ERPNextCard imageUrl={project} title="Project Management" description="Empower construction project management with advanced software solutions. Streamline operations, optimize tasks scheduling, and achieve real-time task tracking for seamless project success in a single system." />
          <ERPNextCard imageUrl={inspection} title="Inspection" description="Simplify construction site assessments with our inspection management software. Easily assign, track, and complete inspections, ensuring compliance and data security while minimizing risks." />
          <ERPNextCard imageUrl={portal} title="Portal Service" description="Strengthen partner and customer relationships with our partner portal software. Offer a secure environment for sharing project updates, support, ensuring efficient communication." />
          <ERPNextCard imageUrl={integration} title="Integrations" description="Efficiently integrate and manage external data sources within your workflow for valuable insights, real-time data exchange, secure access control, and enhanced data security." />
          <ERPNextCard imageUrl={analyze} title="Analyze Data" description="Leverage advanced analytics and real-time reporting to enhance decision-making, integrate data sources, predict outcomes, and streamline collaboration with your team." />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{ marginTop: "120px", marginBottom: "20px", fontWeight: "bold" }}>
            About Construction Software Industry:
            </h4>
            <h6 style={{marginBottom: '20px' , lineHeight: 2}}>The construction ERP software industry is at the forefront of driving digital transformation within the construction sector. These comprehensive solutions empower construction companies by optimizing operations, streamlining project management, and facilitating data-driven decision-making. With real-time data access and robust integration capabilities, construction ERP software enhances efficiency, promotes collaboration, and ensures the successful execution of complex projects.</h6>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={construction}
              alt="construction"
              style={{ height: "300px", width: "500px" }}
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
              Software Applications And Solutions For Construction Industry
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

export default Construction