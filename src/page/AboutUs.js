import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import workforce from '../images/workforce-aboutus.jpeg'
import mission from '../images/mission-aboutus.png'
import HeroBottom from "../components/HeroBottom";

function AboutUs() {
  useEffect(() => {
    document.title = 'Custom ERP And Point Of Sale Software Development Company';
  }, []);
  return (
    <div>
      <Header
        heading="About Matgix"
        title="We're a digital transformation consultancy and engineering company, revolutionizing businesses worldwide. Since 2017, we've empowered companies, startups, and established brands with innovative ERP solutions, driving their digital transformation journey."
        text1="For more info contact to our experts:"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{ marginTop: "60px", marginBottom: "8px"}}>
            Our Workforce
            </h4>
            <h6 style={{marginBottom: '20px' , lineHeight: 2}}>At Matgix, we take pride in our team of experienced developers who have been at the forefront of technology for over a decade. With more than 10 years of dedicated service, we have established ourselves as experts in delivering cutting-edge ERP solutions. Our passionate and skilled professionals bring a wealth of knowledge to every project, ensuring that we provide top-notch solutions to our clients. We are committed to driving innovation and excellence, and our extensive experience speaks to our dedication to crafting quality software solutions for businesses across various industries.</h6>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "60px" }}
          >
            <img
              src={workforce}
              alt="workforce"
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
              src={mission}
              alt="Our Mission"
              style={{
                height: "380px",
                width: "500px",
              }}
            />
          </div>
          <div className="col-md-6">
            <h4 style={{ marginTop: "120px", marginBottom: "8px" }}>
             Our Mission
            </h4>
            <h6 style={{marginBottom: '20px' , lineHeight: 2}}>Our mission is to empower businesses with innovative ERP solutions that drive efficiency and growth. We are dedicated to delivering tailored software that aligns with the unique needs of each client. Our commitment to staying at the forefront of technological advancements ensures that we provide the most cutting-edge solutions in the industry. We aim to be the trusted partner for businesses seeking digital transformation, making their operations smoother and more productive. Through our mission, we contribute to the success and sustainable growth of the businesses we serve, while also promoting technological excellence in the ERP solutions landscape.</h6>
          </div>
          </div>
          </div>
          <div style={{marginTop:'120px'}}>
          <HeroBottom/>
          </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
