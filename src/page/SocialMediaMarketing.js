import React, { useEffect } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import sociaMedia from '../images/social-media.jpg'
import benefits from '../images/benefits-of-social-media.jpg'
import HeroBottom from '../components/HeroBottom';

function SocialMediaMarketing() {
  useEffect(() => {
    document.title = 'Social Media Marketing';
  }, []);
  return (
    <div>
      <Header heading='Social Media Marketing' title='Enhance Your Online Presence with Our Social Media Marketing Solutions!' text1='For more info contact to our experts:'/>
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
              Our Social Media Services:
            </h3>
          <ul>
            <li style={{marginBottom: '20px'}}>
            <b>Social Media Strategy:</b> Our team of experts will collaborate with you to craft a customized social media strategy that aligns perfectly with your business objectives. Whether it's enhancing brand visibility or boosting lead generation, we've got you covered.
            </li>
            <li style={{marginBottom: '20px'}}>
            <b>Compelling Content Creation:</b> Engaging content is the cornerstone of capturing your audience's attention. We'll craft captivating posts, eye-catching visuals, and enthralling videos that will strongly resonate with your target audience.
            </li>
            <li style={{marginBottom: '20px'}}>
            <b>Community Building:</b> Building a thriving community around your brand is essential for long-term success. We actively engage with your audience, address inquiries, and nurture meaningful connections to fortify your brand's reputation.
            </li>
            <li style={{marginBottom: '20px'}}>
            <b>Social Media Advertising:</b> Harness the full potential of social media advertising with our expertise. We'll design highly targeted campaigns on platforms such as Facebook, Instagram, Twitter, and LinkedIn to maximize reach, engagement, and conversions.
            </li>
            <li style={{marginBottom: '20px'}}>
            <b>Data-Driven Analytics and Reporting:</b> We're firm believers in data-driven decision-making. Our analytics and reporting tools provide comprehensive insights into your social media performance, enabling you to fine-tune your strategy and attain measurable results.
            </li>
            </ul>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={sociaMedia}
              alt="ERPSolution"
              style={{ height: "600px", width: "500px" }}
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
              src={benefits}
              alt="OurTeam"
              style={{
                height: "300px",
                width: "400px",
              }}
            />
          </div>
          <div className="col-md-6">
            <h3 style={{ marginTop: "120px", marginBottom: "20px", fontWeight: "bold" }}>
               Benefits Of Social Media Marketing:
            </h3>
            <ul>
            <li style={{marginBottom: '20px'}}>
            <b>Increased Brand Visibility:</b> Social media marketing boosts your brand's online presence, making it more visible to a larger audience.
            </li>
            <li style={{marginBottom: '20px'}}>
            <b>Engagement and Interaction:</b> It allows direct interaction with your audience, fostering stronger customer relationships and trust.
            </li>
            <li style={{marginBottom: '20px'}}>
            <b>Targeted Advertising:</b> You can reach specific demographics, increasing the likelihood of connecting with potential customers.
            </li>
            <li style={{marginBottom: '20px'}}>
            <b>Data-Driven Insights: </b> Social media platforms provide valuable analytics to refine your strategy and achieve better results.
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
              Unlock the Power of Social Media Marketing for Your Business Growth.
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

export default SocialMediaMarketing