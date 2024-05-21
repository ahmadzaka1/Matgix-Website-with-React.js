import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import CRM from '../images/CRM.jpg'
import ERPlogo from '../images/ERPlogo.jpg'
import surveySoftware from '../images/surveySoftware.jpg'
import projectManagement from '../images/projectManagement.webp'
import restaurantManagement from '../images/restaurantManagement.png'
import inventoryManagement from '../images/inventoryManagement.png'
import hospitalManagement from '../images/hospitalManagement.png'
import schoolManagement from '../images/schoolManagement.png'
import hrManagement from '../images/hrManagement.jpg'

function Solution() {
  useEffect(() => {
    document.title = 'Startup And Enterprise Level Software Solutions';
  }, []);
  return (
    <div>
      <Header heading='Solutions for your business' title='We provide custom solutions for your business!' text1='For more info contact to our experts:'/>
      <h3 style={{textAlign: 'center', margin: '60px'}}>Solutions We Provide</h3>
      <div className="container">
      <div className="row">    
  <Card to="/Solutions/CRM" imageUrl={CRM} title="CRM" description="With our CRM solutions, enhance customer relationships, streamline communication, and drive business growth."/>
  <Card to="/Solutions/ERP" imageUrl={ERPlogo} title="ERP" description="Optimize your business operations with our ERP solutions. Covering everything from accounting to HR, our software ensures efficiency and success."/>
  <Card to="/Solutions/Survey-Software" imageUrl={surveySoftware} title="Survey Software" description="Simplify data collection and analysis with our survey software. Gather insights and improve your business and research."/>
  <Card to="/Solutions/Project-Management-System" imageUrl={projectManagement} title="Project Management System" description="Manage big projects and stay organized, streamline your tasks, and achieve project success with our intuitive project management system that is user-friendly."/>
  <Card to="/Solutions/Restaurant-Management-System" imageUrl={restaurantManagement} title="Restaurant Management System" description="Effortlessly handle restaurant operations, from orders to reservations, with our comprehensive management system."/>
  <Card to="/Solutions/Inventory-Management-System" imageUrl={inventoryManagement} title="Inventory Management System" description="Streamline inventory control, reduce costs, and optimize stock levels with our efficient inventory management system."/>
  <Card to="/Solutions/Hospital-Management-System" imageUrl={hospitalManagement} title="Hospital Management System" description="Improve patient care, enhance efficiency, and simplify administrative tasks with our comprehensive management system tailored for healthcare facilities."/>
  <Card to="/Solutions/School-Management-System" imageUrl={schoolManagement} title="School Management System" description="Streamline administrative tasks, enhance communication, and promote student success with our tailored management system for educational institutions."/>
  <Card to="/Solutions/HR-Management-System" imageUrl={hrManagement} title="HR Management System" description="Simplify Human Resoucre processes for HR department, manage personnel effectively, and promote workforce productivity with our comprehensive HR management system."/>
  </div> 
</div>
      <Footer/>
    </div>
  )
}

export default Solution