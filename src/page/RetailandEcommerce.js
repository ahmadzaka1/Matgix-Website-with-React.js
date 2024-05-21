import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroBottom from '../components/HeroBottom'
import ERPNextCard from '../components/ERPNextCard'
import about from '../images/ecommerce-about.avif'
import erp from '../images/erp-ecommerce.png'
import analyze from '../images/analyze-ecommerce.png'
import ecommerce from '../images/ecommerce-evolution.png'
import tech from '../images/tech-ecommerce.png'
import customer from '../images/customer-ecommerce.jpg'
import integration from '../images/integration-ecommerce.png'
import B2B from '../images/B2B-ecommerce.png'
import B2C from '../images/B2C-ecommerce.png'
function RetailandEcommerce() {
  useEffect(() => {
    document.title = 'Retail And Ecommerce Industry';
  }, []);
  return (
    <div>
      <Header heading='Enterprise Retail & Ecommerce' title='Elevate Your Retail and Ecommerce Enterprise with Our Tailored Software Solutions and Enhance Customer Experience.' text1='For more info contact to our experts:'/>
      <div className='container'>
      <h3 style={{ textAlign: "center", marginTop: "120px" }}>
      Retail And Ecommerce Services
      </h3>
      <h6 style={{ textAlign: "center", marginTop: "20px" }}>
      Revolutionize the retail and eCommerce industry with comprehensive ERP solutions. Enhance efficiency, logistics, and customer experiences.
      </h6>
      </div>
      <div className="container">
        <div className="row">
          <ERPNextCard imageUrl={erp} title="ERP Solutions" description="Our eCommerce experts provide seamless omnichannel solutions for a personalized shopping experience. Features include powerful APIs, content management, SEO tools, and native integrations." />
          <ERPNextCard imageUrl={analyze} title="Analyze Data" description="We offer advanced analytics for personalized services and improved customer engagement, including dynamic pricing, behavior prediction, demand forecasting, cart management, and product recommendations." />
          <ERPNextCard imageUrl={ecommerce} title="ECommerce Evolution" description="Enhance your retail and eCommerce business success with our comprehensive omnichannel software solutions for a seamless and engaging customer experience, ultimately boosting your ROI." />
          <ERPNextCard imageUrl={tech} title="Tech Enhancements" description="Our developers enhance eCommerce platforms with new tech capabilities: SEO optimizations, contextual search, third-party app integration, and digital wallets." />
          <ERPNextCard imageUrl={customer} title="Customer Rewards" description="Developing customer loyalty and rewards features that foster strong customer relationships, including advocacy, social deals, personal messages, comprehensive engagement, and coupons" />
          <ERPNextCard imageUrl={integration} title="Integration" description="We excel at seamlessly integrating cutting-edge engineering tech into your systems for faster time-to-market. This includes API enablement, mobile security, test automation, and DevOps." />
          <ERPNextCard imageUrl={B2B} title="B2B Solution" description="We specialize in advanced B2B eCommerce solutions designed to elevate operational efficiency, streamline sales cycles, and transform your B2B eStore into a powerful engine for sustained success." />
          <ERPNextCard imageUrl={B2C} title="B2C Solution" description="We provide top-tier CMS and E-commerce solutions for B2C businesses, offering services like eCommerce consulting, shopping cart software development, integrated analytics, smart search, and product information management." />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{ marginTop: "120px", marginBottom: "20px", fontWeight: "bold" }}>
            About Retail And Ecommerce Industry:
            </h4>
            <h6 style={{marginBottom: '20px' , lineHeight: 2}}>Enterprise eCommerce platforms must efficiently manage various tasks, from product catalogs to order processing and third-party integrations. This complexity intensifies with factors like high order volumes, diverse currencies, and multiple languages. Your eCommerce software is the linchpin of your business. If it struggles now, imagine the setback your brand could face in the future. Consumer expectations for intricate and engaging experiences are continuously rising.</h6>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={about}
              alt="school management"
              style={{ height: "250px", width: "500px" }}
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
              Software Applications And Solutions For Ecommerce And Retail Industry
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

export default RetailandEcommerce