import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroBottom from '../components/HeroBottom'
import digitalMarket from '../images/digital-marketing.jpg'
import digital from '../images/branding-benefits-digital.jpg'

function DigitalMarketing() {
  useEffect(() => {
    document.title = 'Digital Marketing';
  }, []);
  return (
    <div>
      <Header heading='Digital Marketing' title='Discovering Digital Potential: Your Journey to Marketing Success!' text1='For more info contact to our experts:'/>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3
              style={{
                marginTop: "120px",
                marginBottom: "20px",
                fontWeight: "bold", 
              }}
            >
              Our Digital Marketing Services:
            </h3>
          <ul>
            <li style={{marginBottom: '20px'}}>
            <b>SEO Services: </b> Enhance online visibility and organic search rankings with our strategic SEO. We optimize your site for higher search engine placement, driving targeted organic traffic.
            </li>
            <li style={{marginBottom: '20px'}}>
            <b>PPC Advertising:</b> Maximize reach and results with our PPC campaigns. Targeted ads across search engines and social media ensure a strong ROI for your ad spend.
            </li>
            <li style={{marginBottom: '20px'}}>
            <b>SMM Strategies:</b> Engage your audience through data-driven social media marketing. Boost brand awareness, user engagement, and customer loyalty across popular platforms.
            </li>
            <li style={{marginBottom: '20px'}}>
            <b>Content Excellence:</b> Captivate your audience and build thought leadership with our quality content. Tailored to your audience's interests, it strengthens your online presence and drives conversions.
            </li>
            <li style={{marginBottom: '20px'}}>
            <b>Email Campaigns: </b> Nurture relationships and drive conversions with effective email marketing. Personalized messages, valuable content, and targeted offers reach your subscribers.
            </li>
            </ul>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={digitalMarket}
              alt="ERPSolution"
              style={{ height: "400px", width: "500px" }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 d-flex justify-content-start align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={digital}
              alt="OurTeam"
              style={{
                height: "400px",
                width: "500px",
              }}
            />
          </div> 
          <div className="col-md-6">
            <h3 style={{ marginTop: "120px", marginBottom: "20px", fontWeight: "bold" }}>
               Benefits Of Digital Marketing:
            </h3>
            <ul>
            <li style={{marginBottom: '20px'}}>
            <b>Increased Online Visibility: </b> Digital marketing enhances your brand's online presence, making it more visible to a larger audience.
            </li>
            <li style={{marginBottom: '20px'}}>
            <b>Multi-Platform Engagement: </b> It allows you to engage with your audience on various online platforms, broadening your reach and increasing your chances of connecting with potential customers.
            </li>
            <li style={{marginBottom: '20px'}}>
            <b>Data-Driven Decision-Making: </b> Digital marketing provides valuable analytics and insights to refine your strategy, optimize campaigns, and achieve better results.
            </li>
            <li style={{marginBottom: '20px'}}>
            <b> Cost-Effective Advertising: </b> It offers cost-effective advertising options, allowing you to reach specific demographics and target your ideal customers without overspending.
            </li>
            </ul>
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
              Elevate Your Business with Our Digital Marketing Strategies.
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

export default DigitalMarketing