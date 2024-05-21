import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import HeroBottom from '../components/HeroBottom'
import CRMsolutions from '../images/CRM-solutions.png'
import consultancy from '../images/consultancy-solutions.avif'
import marketing from '../images/marketing-solutions.webp'
import support from '../images/support-solutions.jpg'
import integration from '../images/integrations-solutions.png'
import salesforce from '../images/salesforce-solutions.avif'
import customSolutions from '../images/custom-solutions.jpg'

function CRM() {
  useEffect(() => {
    document.title = 'Custom CRM Development Company';
  }, []);
  return (
    <div>
      <Header heading='CRM Development Services' title="Transform Customer Interaction and Sales Analysis with our Custom CRM Software." text1='For more info contact to our experts:'/>
      <div className='container'>
      <h3 style={{ textAlign: "center", marginTop: "120px" }}>
        OUR CUSTOM CRM DEVELOPMENT SERVICES
      </h3>
      <h6 style={{ textAlign: "center", marginTop: "20px" }}>
      Our custom CRM software helps businesses manage digital customer data effectively, enabling better targeting and growth.
      </h6>
      </div>
      <div className="container">
        <div className="row">
          <Card
            
            imageUrl={consultancy}
            title="Consultancy"
            description="Discover what your business truly needs in a CRM system with our expert consultancy. Tailor your unique CRM software for seamless integration with your business philosophy."
          />
          <Card
            
            imageUrl={marketing}
            title="Marketing Strategy"
            description="Streamline Your Marketing with Our All-in-One CRM Solution. Create custom campaigns and leverage deep analysis tools easily. Maximize your marketing impact with ease."
          />
          <Card
            
            imageUrl={support}
            title="Streamlined Support"
            description="Enhance Customer Satisfaction with Automated CRM Support. Stay connected with them, informed about latest trends, and engaged with personalized automation."
          />
          <Card
            
            imageUrl={integration}
            title="Streamlined CRM Integration"
            description="Simplify CRM Integration into Your Business. Our experts ensure a smooth transition, harness the full potential of your new software, and provide ongoing support for optimal performance."
          />
          <Card
            
            imageUrl={salesforce}
            title="Enhanced Salesforce "
            description="Unlock Individual Potential with Customer-Centric Sales Automation. Customize each customer's journey, automate upselling, and sales plans, insights of customer interactions with advanced data analysis tools."
          />
          <Card
            
            imageUrl={customSolutions}
            title="Custom CRM Development"
            description="Explore Tailored CRM Development with us. From analytics to AI-powered sales and marketing, we create custom solutions to fit your unique needs, even offering mobile accessibility with a dedicated app."
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{ marginTop: "120px", marginBottom: "20px", fontWeight: "bold" }}>
            Empower Your Digital Customer Relations:
            </h4>
            <ul>
  <li style={{ marginBottom: '20px' }}>
    <b>Improved Customer Relationships:</b> Improved Customer Relationships: CRM enables better understanding and engagement with customers, fostering stronger relationships.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b> Efficient Data Management:</b> Streamline customer data, making it easier to access and analyze for informed decision-making.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Enhanced Communication:</b> CRM facilitates personalized and timely communication, leading to better customer satisfaction.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b> Sales Optimization:</b> Automate sales processes, track leads, and convert them more efficiently.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Data-Driven Insights:</b> Utilize data analytics to make informed decisions, refine strategies, and drive business growth.
  </li>
</ul>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={CRMsolutions}
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
              Transform Customer Interaction and Sales Analysis with our Custom CRM Software.
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

export default CRM