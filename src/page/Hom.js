import React, { useEffect } from 'react';
import landingimgage3 from '../images/landingimage3.jpg';
import './homeStyles.css';
import Footer from '../components/Footer';
import Card from '../components/Card';
import erpImage from '../images/ERP.jpg'
import pointOfSaleImg from '../images/pointOfSaleImg.jpg'
import SmmImage from '../images/SmmImage.jpg'
import { Link } from 'react-router-dom';
import odoo from '../images/odoo.webp';
import erpnext from '../images/erpnext.png';
import linkedpos from '../images/linkedpos.png'
import ERPlogo from '../images/ERPlogo.jpg'
import restaurantManagement from '../images/restaurantManagement.png'
import hospitalManagement from '../images/hospitalManagement.png'
import HeroBottom from '../components/HeroBottom';

function Hom() {
  useEffect(() => {
    document.title = 'ERP Software Development Company';
  }, []);
  return (
    <div>
    <div className='imgCont'>
      <img className='landing' src={landingimgage3} alt='landing' />
      <div className='image-text'>
        <h1>Creating Digital Solutions</h1>
        <h6>We Develop Outstanding Software Solutions for Startups and Enterprises.</h6>
      </div>
    </div>
    <h3 style={{textAlign: 'center', marginTop: '200px', marginBottom: '40px'}}>Services We Provide</h3>
      <div className="container">
      <div className="row">    
  <Card to="/Services/Enterprise" imageUrl={erpImage} title="ERP Software Development" description="Discover customized Eenterprise software solutions that fit your business perfectly. Unlock growth and efficiency with our company."/>
  <Card to="/Services/Linkedpos" imageUrl={pointOfSaleImg} title="Point of Sale System" description="Revolutionize your business with our Point of Sale Software. Effortlessly manage sales, inventory, and customer interactions."/>
  <Card to="/Services/Social-Media-Marketing" imageUrl={SmmImage} title="Social Media Marketing" description="Boost your online presence with our Social Media Marketing services. Reach, engage, and achieve results through strategic campaigns."/>
  <Link to="/Services">
  <div className="text-center">
  <button className="btn button btn-sm rounded-pill" type="submit">
    View All Services!
  </button>
</div>
              </Link>
  </div> 
</div>
<h3 style={{textAlign: 'center', marginTop: '100px' , marginBottom: '40px'}}>Technologies</h3>
      <div className="container">
      <div className="row">
      <Card to="/Technologies/Odoo" imageUrl={odoo} title="Odoo" description="Odoo is a versatile open-source business management software suite offering a wide array of applications for various business functions. It provides modules for CRM, e-commerce, inventory, accounting, and more, making it a flexible and scalable solution for businesses to streamline their operations."/>
      <Card to="/Technologies/ERPNext" imageUrl={erpnext} title="ERPNext" description="ERPNext is an open-source Enterprise Resource Planning (ERP) software that provides a comprehensive suite of applications for managing various business processes. It includes modules for accounting, inventory, project management, human resources, and more. ERPNext is known for its ease of use, scalability, and customization options."/>
      <Card to="/Technologies/Linked-POS" imageUrl={linkedpos} title="Linked POS" description="A Point of Sale technology that integrates with your inventory and accounting systems, allowing businesses to manage sales transactions and track inventory, providing an efficient checkout experience for customers. It is typically used in retail to process transactions, manage inventory, and generate sales reports. "/>
      <Link to="/Technologies">
  <div className="text-center">
  <button className="btn button btn-sm rounded-pill" type="submit">
    View More!
  </button>
</div>
              </Link>
      </div>
      </div>
      <h3 style={{textAlign: 'center', marginTop: '100px', marginBottom: '40px'}}>Solutions We Provide</h3>
      <div className="container">
      <div className="row">    
  <Card to="/Solutions/ERP" imageUrl={ERPlogo} title="ERP" description="Optimize your business operations with our modern and user-friendly ERP solutions. Covering everything from accounting, payroll, to HR, our software ensures efficiency and success."/>
  <Card to="/Solutions/Restaurant-Management-System" imageUrl={restaurantManagement} title="Restaurant Management System" description="Effortlessly handle restaurant operations, from orders to reservations, with our comprehensive management system."/>
  <Card to="/Solutions/Hospital-Management-System" imageUrl={hospitalManagement} title="Hospital Management System" description="Improve patient care, enhance efficiency, and simplify administrative tasks with our comprehensive management system tailored for healthcare facilities."/>
  <Link to="/Solutions">
  <div className="text-center">
  <button className="btn button btn-sm rounded-pill" type="submit">
    View More!
  </button>
</div>
              </Link>
  </div> 
</div>
<div className="container" style={{ marginTop: "120px" }}>
        <HeroBottom/>
      </div>
    <Footer/>
    
    </div>
  );
}

export default Hom;
