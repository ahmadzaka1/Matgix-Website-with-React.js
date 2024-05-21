import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import erpImage from '../images/ERP.jpg'
import pointOfSaleImg from '../images/pointOfSaleImg.jpg'
import SmmImage from '../images/SmmImage.jpg'
import digitalMarketing from '../images/digitalMarketing.jpg'
import productEngImg from '../images/productEngImg.jpg'
import mvpImage from '../images/mvpImage.png'

function Service() {
  useEffect(() => {
    document.title = 'ERP And Point Of Sale Software Services';
  }, []);
  return (
    <div>
      <Header heading='Services' title='We empower startups and eterprise to drive change and achieve real business benefits through our IT consulting services.' text1='For more info contact to our experts:'/>
      <h3 style={{textAlign: 'center', margin: '60px'}}>Our Services</h3>
      <div className="container">
      <div className="row">    
  <Card to="/Services/Enterprise" imageUrl={erpImage} title="ERP Software Development" description="Discover customized Eenterprise software solutions that fit your business perfectly. Unlock growth and efficiency with our company."/>
  <Card to="/Services/Linkedpos" imageUrl={pointOfSaleImg} title="Point of Sale System" description="Revolutionize your business with our Point of Sale Software. Effortlessly manage sales, inventory, and customer interactions."/>
  <Card to="/Services/Social-Media-Marketing" imageUrl={SmmImage} title="Social Media Marketing" description="Boost your online presence with our Social Media Marketing services. Reach, engage, and achieve results through strategic campaigns."/>
  <Card to="/Services/Digital-Marketing" imageUrl={digitalMarketing} title="Digital Marketing" description="Elevate your brand online with our expert digital marketing services. Reach your audience, drive conversions, and boost visibility for business success."/>
  <Card to="/Services/Product-Engineering" imageUrl={productEngImg} title="Product Engineering" description="Discover the power of product engineering with our software experts as they meticulously design, develop, and optimize innovative digital products."/>
  <Card to="/Services/MVP-Development" imageUrl={mvpImage} title="MVP Development" description="Accelerate your vision with our MVP development. We create functional prototypes to validate ideas, gather user feedback, and drive product evolution."/>
  </div> 
</div>
      <Footer/>
    </div>
  )
}

export default Service