import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroBottom from '../components/HeroBottom'
import Card from '../components/Card'
import consultancy from '../images/consultancy-solutions.avif'
import survey from '../images/survey-solutions.jpg'
import software from '../images/support-solutions.jpg'
import integration from '../images/integration-survey-solution.jpg'
import surveyimplementation from '../images/survey-implementation.jpg'
import data from '../images/analyzing-data.jpg'
import surveysoftware from '../images/best_survey_apps.jpg'

function SurveySoftware() {
  useEffect(() => {
    document.title = 'Survey Analysis Software Development';
  }, []);
  return (
    <div>
      <Header heading='Survey Software' title='Create innovative surveys and get in-depth analysis with your custom survey software.' text1='For more info contact to our experts:'/>
      <div className='container'>
      <h3 style={{ textAlign: "center", marginTop: "120px" }}>
      Our Survey Software Services
      </h3>
      <h6 style={{ textAlign: "center", marginTop: "20px" }}>
      Create surveys, distribute, and visualize data with charts. Streamline data collection and audience targeting with custom surveys for a more efficient business optimization process.
      </h6>
      </div>
      <div className="container">
        <div className="row">
          <Card
            
            imageUrl={consultancy}
            title="Consultancy"
            description="Our consulting team guides you from concept to completion, ensuring your survey software meets your unique requirements."
          />
          <Card
            
            imageUrl={survey}
            title="Survey Builder"
            description="Creating custom surveys with our survey software, offering versatile tools for various data types and smart question combinations."
          />
          <Card
            
            imageUrl={software}
            title="Software Development"
            description="After consulting, our expert developers bring your custom survey software to life, aligning it seamlessly with your business."
          />
          <Card
            
            imageUrl={integration}
            title="Survey Integration"
            description="Create distinct survey groups and seamlessly distribute surveys through integrated marketing channels within your customized software."
          />
          <Card
            
            imageUrl={surveyimplementation}
            title="Implementation"
            description="We ensure seamless implementation, integrating your custom survey software with your data channels for a smooth start in your business."
          />
          <Card
            
            imageUrl={data}
            title="Analyzing Data"
            description="After successful surveys, your custom survey system stores and analyzes data, providing quick insights into your target audience's opinions."
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{ marginTop: "120px", marginBottom: "20px", fontWeight: "bold" }}>
            Professional Survey Solutions:
            </h4>
            <ul>
  <li style={{ marginBottom: '20px' }}>
    <b>Data-Driven Decision Making:</b> Survey software empowers data-driven decision-making by providing valuable insights for refining strategies.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Cost-Effective Research:</b> Conducting surveys digitally reduces costs associated with traditional methods, making research more budget-friendly.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Targeted Marketing:</b> Survey software allows you to create targeted surveys tailored to specific customer segments.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Efficient Data Analysis:</b> Streamlined data collection and analysis save time and resources for more efficient research.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Enhanced Customer Engagement:</b> Engaging customers through surveys strengthens relationships and fosters greater engagement.
  </li>
</ul>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={surveysoftware}
              alt="Survey"
              style={{ height: "400px", width: "400px" }}
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
              Unlock Data Insights with Our Survey Software Solutions.
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

export default SurveySoftware