import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroBottom from '../components/HeroBottom'
import ERPNextCard from '../components/ERPNextCard'
import mobile from '../images/mobile-travel.png'
import reward from '../images/reward-travel.png'
import integration from '../images/integration-construction.png'
import customIntegration from '../images/custom-integration-travel.png'
import customSoftware from '../images/custom-software-travel.png'
import about from '../images/about-travel.jpg'

function TravelandHospitality() {
  useEffect(() => {
    document.title = 'Travel And Hospitality Applications';
  }, []);
  return (
    <div>
      <Header heading='Travel & Hospitality Software Development' title='Elevate Travel and Hospitality Experiences with Our Custom Software and App Solutions.' text1='For more info contact to our experts:'/>
      <div className='container'>
      <h3 style={{ textAlign: "center", marginTop: "120px" }}>
      Travel And Hosptality Software Solutions
      </h3>
      <h6 style={{ textAlign: "center", marginTop: "20px" }}>
      We specialize in tailoring software solutions for this dynamic industry. From guest-centric mobile apps to seamless custom software integration, we drive innovation and efficiency. Unleash your business's potential with our bespoke solutions.
      </h6>
      </div>
      <div className="container">
        <div className="row">
          <ERPNextCard imageUrl={mobile} title="Mobile Application" description=" Elevate guest experiences with our custom mobile apps, offering seamless booking, real-time updates, and interactive tools for travelers." />
          <ERPNextCard imageUrl={reward} title="Rewards Enhancement" description="Boost guest loyalty and satisfaction through tailored rewards, discounts, and exclusive perks with our loyalty system solutions." />
          <ERPNextCard imageUrl={integration} title="API Integration" description="Streamline operations by seamlessly connecting with external services and APIs for enhanced data exchange and efficiency." />
          <ERPNextCard imageUrl={customIntegration} title="Custom Integrations" description="Simplify processes and reduce complexities by ensuring your existing software systems work together." />
          <ERPNextCard imageUrl={customSoftware} title="Custom Software" description="Get unique software solutions, custom-made to optimize your operations and provide excellent guest experiences." />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{ marginTop: "120px", marginBottom: "20px", fontWeight: "bold" }}>
            About Travel And Hospitality Industry:
            </h4>
            <h6 style={{marginBottom: '20px' , lineHeight: 2}}>The travel and hospitality software industry is a dynamic sector dedicated to providing innovative solutions for businesses in the travel and hospitality sectors. From hotels and restaurants to airlines and tour operators, this industry offers software solutions that optimize various aspects of their operations. These solutions cover reservations, booking management, customer relationship management, payment processing, and more. By incorporating technology, businesses can enhance customer experiences, streamline operations, and ultimately drive growth in the highly competitive travel and hospitality market. The software in this industry is designed to meet the unique needs of these businesses, ensuring that they can provide exceptional services while maintaining efficiency and staying ahead of industry trends.</h6>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={about}
              alt="construction"
              style={{ height: "500px", width: "500px" }}
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
              Software Applications And Solutions For Travel And Hospitality Industry
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

export default TravelandHospitality