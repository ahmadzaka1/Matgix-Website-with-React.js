import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroBottom from '../components/HeroBottom';
import ERPNextCard from '../components/ERPNextCard';
import software from '../images/software-healthcare.png'
import app from '../images/application-healthcare.jpg'
import custom from '../images/custom-healthcare.png'
import remote from '../images/remote-healthcare.jpg'
import perscription from '../images/perscription-healthcare.jpg'
import IOT from '../images/IOT-healthcare.png'
import EHR from '../images/ehr-healthcare.png'
import streamline from '../images/streamlined-healthcare.png'
import healthcare from '../images/healthcare-healthcare.jpeg'

function HealthCare() {
  useEffect(() => {
    document.title = 'Healthcare Industry Including Hospitals, Pharmacies, Clinics';
  }, []);
  return (
    <div>
      <Header heading='Healthcare Software Development' title='We create custom healthcare applications to streamline appointment scheduling and
patient check-in to save time for patients and doctors.' text1='For more info contact to our experts:'/>
      <div className='container'>
      <h3 style={{ textAlign: "center", marginTop: "120px" }}>
      Healthcare Software Development Services
      </h3>
      <h6 style={{ textAlign: "center", marginTop: "20px" }}>
      We provide healthcare software development tailored to hospitals, doctors, and patients, enhancing digital healthcare services and health management through custom solutions and mobile applications, ensuring secure data handling for health systems and clinics.
      </h6>
      </div>
      <div className="container">
        <div className="row">
          <ERPNextCard imageUrl={software} title="Healthcare Software" description="Efficiently manage hospital operations with our customized Hospital Management System, streamlining administrative tasks, patient care, and data security in a single system." />
          <ERPNextCard imageUrl={app} title="Mobile Application" description="Empower both patients and healthcare providers to monitor health status remotely and stay well-informed through our innovative medical mobile applications" />
          <ERPNextCard imageUrl={custom} title="Custom Development" description="We offer end-to-end software development, crafting custom applications customized to meet your unique requirements and address your specific challenges." />
          <ERPNextCard imageUrl={remote} title="Remote Medical Care" description="Enabling seamless patient-provider communication, our remote monitoring health apps offer real-time updates on patient health, minimizing medication errors." />
          <ERPNextCard imageUrl={IOT} title="IOT" description="IoT revolutionizes health monitoring, connecting your devices and wearables to remotely check vital health metrics like blood pressure and glucose levels, offering convenience and accessibility" />
          <ERPNextCard imageUrl={perscription} title="Perscription Mobility" description="We specialize in creating secure mobile prescription apps that store patient information, including prescriptions, allergies, and biometrics, to greatly minimize medical mistakes." />
          <ERPNextCard imageUrl={EHR} title="Electronic Health Record" description="Electronic health records improve diagnosis and treatment precision, enhancing the accuracy of patients' health records. Our healthcare applications reduce operational costs." />
          <ERPNextCard imageUrl={streamline} title="Streamlined Healthcare" description="Healthcare apps streamline MIS reporting, patient-physician interactions, registration, and scheduling for hospitals and clinics while ensuring data security." />
          
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{ marginTop: "120px", marginBottom: "20px", fontWeight: "bold" }}>
            About Healthcare Software System:
            </h4>
            <h6 style={{marginBottom: '20px' , lineHeight: 2}}>The healthcare sector is at the forefront of digital transformation, driven by the increasing adoption of medical mobile apps that revolutionize health management. This shift presents a unique opportunity to explore the development or enhancement of healthcare apps, catering to the evolving needs of patients and medical professionals.</h6>

          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={healthcare}
              alt="healthcare"
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
              Software Applications And Solutions For Healthcare Industry
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

export default HealthCare;