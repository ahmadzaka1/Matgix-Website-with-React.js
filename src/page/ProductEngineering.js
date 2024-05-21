import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card.js'
import custom from '../images/custom-product-development.jpg'
import testing from '../images/product-testing.jpg'
import support from '../images/Maintenance-and-Support.jpg'
import marketing from '../images/product-marketing.jpg'
import update from '../images/update-technology.jpg'
import mobile from '../images/mobile-apps-solutions.jpg'
import cloud from '../images/cloud-services.avif'
import devops from '../images/devops.webp'
import uiux from '../images/Ui-Ux.png'
import benefitsProduct from '../images/benefits-of-product-engineering.png'
import HeroBottom from '../components/HeroBottom'

function ProductEngineering() {
  useEffect(() => {
    document.title = 'Product Engineering';
  }, []);
  return (
    <div>
      <Header heading='Product Engineering'  title='Creating Innovation for the Future through Product Engineering.' text1='For more info contact to our experts:'/>
      <div className='container'>
      <h3 style={{ textAlign: "center", marginTop: "60px" }}>
        OUR PORDUCT ENGINEERING SERVICES
      </h3>
      <h6 style={{ textAlign: "center", marginTop: "20px" }}>
      With deep industry expertise, we tackles complex challenges and crafts tailored solutions. Our dedicated domain experts offer end-to-end product engineering, optimizing speed-to-market, cost-efficiency, and ROI with proven best practices and full transparency.
      </h6>
      </div>
      <div className="container">
        <div className="row">
          <Card
            
            imageUrl={custom}
            title="Custom Product Developmnt"
            description="We create problem-solving enterprise applications, covering the full development cycle, from ideation to clean code, with cutting-edge technology."
          />
          <Card
            
            imageUrl={testing}
            title="Product Testing"
            description="We conduct comprehensive pre-launch testing for quality assurance, including functionality, performance, and security, using innovative tools and frameworks."
          />
          <Card
            
            imageUrl={support}
            title="Support And Maintenance"
            description="We offer multi-level technical support, including product enhancements, DevOps, customer helpdesk services, bug fixes, technology upgrades, and issue resolution."
          />
          <Card
            
            imageUrl={marketing}
            title="Product Marketing"
            description="We are experienced in delivering end-to-end product marketing solutions, from strategic planning and branding to successful product launches and promotional campaigns."
          />
          <Card
            
            imageUrl={update}
            title="Upgrading Technology"
            description="Embrace cutting-edge tech and innovation. We offer services for Technology Upgrades, UX Enhancement, Social, Mobile, Data Analytics, and Cloud Migration."
          />
          <Card
            
            imageUrl={mobile}
            title="Mobile Solutions"
            description="Supercharge your mobile initiatives! We develop Android, iOS, and cross-platform solutions using ReactNative and Flutter to optimize your business for the mobile-first world."
          />
          <Card
            
            imageUrl={cloud}
            title="Cloud Services"
            description="We help clients in managing cloud-based applications across various environments, providing tailored, risk-mitigated solutions for minimal downtime and scalability."
          />
          <Card
            
            imageUrl={devops}
            title="DevOps"
            description="Streamline processes, complete automation services, and team collaboration with our company. We simplify integration and adapt for your evolving business needs."
          />
          <Card
            
            imageUrl={uiux}
            title="UI/UX"
            description="Our experienced design team creates world-class, intuitive products using user-centered design principles, offering wireframes, prototypes, and usability testing."
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{ marginTop: "120px", marginBottom: "8px", fontWeight: "bold" }}>
             How Product Engineering Helps Your Business:
            </h4>
            <ul>
  <li style={{ marginBottom: '20px' }}>
    <b>Accelerated Development:</b> Product engineering expedites the development process, reducing time-to-market.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Cost Optimization:</b> It minimizes operational and production costs, enhancing overall ROI.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Quality Assurance:</b> Product engineering ensures the creation of reliable, high-quality solutions.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Innovation Enablement:</b> It fosters innovation, helping businesses stay competitive and meet evolving customer needs.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Scalability and Flexibility:</b> Product engineering solutions are designed to be scalable and adaptable to accommodate business growth and changing requirements.
  </li>
</ul>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "60px" }}
          >
            <img
              src={benefitsProduct}
              alt="ERPSolution"
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
              Innovate and Drive Efficiency with Product Engineering.
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

export default ProductEngineering