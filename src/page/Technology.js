import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import odoo from '../images/odoo.webp';
import erpnext from '../images/erpnext.png';
import linkedpos from '../images/linkedpos.png'

function Technology() {
  useEffect(() => {
    document.title = 'Dealing in Odoo, ERPNext And LinkedPOS';
  }, []);
  return (
    <div>
      <Header heading='Technologies We Deal' title='Having experience in all the latest cutting edge techologies!' text1='For more info contact to our experts:'/>
      <h3 style={{textAlign: 'center', margin: '60px'}}>Technologies</h3>
      <div className="container">
      <div className="row">
      <Card to="/Technologies/Odoo" imageUrl={odoo} title="Odoo" description="Odoo is a versatile open-source business management software suite offering a wide array of applications for various business functions. It provides modules for CRM, e-commerce, inventory, accounting, and more, making it a flexible and scalable solution for businesses to streamline their operations."/>
      <Card to="/Technologies/ERPNext" imageUrl={erpnext} title="ERPNext" description="ERPNext is an open-source Enterprise Resource Planning (ERP) software that provides a comprehensive suite of applications for managing various business processes. It includes modules for accounting, inventory, project management, human resources, and more. ERPNext is known for its ease of use, scalability, and customization options."/>
      <Card to="/Technologies/Linked-POS" imageUrl={linkedpos} title="Linked POS" description="A Point of Sale technology that integrates with your inventory and accounting systems, allowing businesses to manage sales transactions and track inventory, providing an efficient checkout experience for customers. It is typically used in retail to process transactions, manage inventory, and generate sales reports. "/>
      </div>
      </div>
      <Footer/>
    </div> 
  )
}

export default Technology