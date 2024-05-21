import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroBottom from '../components/HeroBottom'
import ERPNextCard from '../components/ERPNextCard'
import algorithms from '../images/algorithms-insurance.png'
import project from '../images/project-construction.png'
import mobile from '../images/mobile-insurance.jpg'
import portal from '../images/portal-construction.png'
import finance from '../images/finance-insurance.webp'
import analyze from '../images/analyze-construction.png'
import about from '../images/insurance-about.jpg'

function Insurance() {
  useEffect(() => {
    document.title = 'Insurance Industry';
  }, []);
  return (
    <div>
      <Header heading='Insurance Software Development' title='Helping the World’s Insurance Organizations to Boost their Efficiency, Profitability, and Safety through Custom Software Solutions.' text1='For more info contact to our experts:'/>
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
          <ERPNextCard imageUrl={algorithms} title="Insurance Algorithms" description=" Empower your insurance operations with our state-of-the-art analysis algorithms, ensuring precise risk assessment and premium calculations." />
          <ERPNextCard imageUrl={project} title="Management Software" description="Simplify and automate claims processing and policy management, delivering efficiency and improved customer service." />
          <ERPNextCard imageUrl={mobile} title="Mobile Apps" description="Transform customer engagement with our mobile apps and AI-driven chatbots, providing instant support and information accessibility." />
          <ERPNextCard imageUrl={portal} title="Portal Service" description="Tailor user-friendly portals and websites to engage and serve clients seamlessly in the digital realm with our software." />
          <ERPNextCard imageUrl={finance} title="Financial Software" description="Elevate your financial management with our specialized software solutions, designed to streamline accounting, billing, and financial reporting." />
          <ERPNextCard imageUrl={analyze} title="Analyze Data" description="Harness the power of data science and advanced analytics to gain valuable insights, enhance underwriting, and drive strategic decisions." />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{ marginTop: "120px", marginBottom: "20px", fontWeight: "bold" }}>
            About Insurance Industry:
            </h4>
            <h6 style={{marginBottom: '20px' , lineHeight: 2}}>The insurance ERP software industry specializes in providing tailored Enterprise Resource Planning (ERP) solutions for insurance companies. These solutions streamline core operations, including policy administration, claims processing, underwriting, financial management, and customer relations. By enhancing operational efficiency, ensuring data accuracy, and enabling robust analytics, insurance ERP software fosters better customer service, cost reduction, and regulatory compliance. In a data-intensive and risk-focused industry, it empowers insurance professionals to make informed decisions and adapt to market changes effectively.</h6>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={about}
              alt="construction"
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
              Software Applications And Solutions For Insurance Industry
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

export default Insurance