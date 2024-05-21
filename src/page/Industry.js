import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import healthCare from '../images/healthCare.jpeg'
import retailAndEcommerce from '../images/retailAndEcommerce.jpg'
import sportsAndEntertainment from '../images/sportsAndEntertainment.jpg'
import construction from '../images/construction.jpg'
import insurance from '../images/insurance.jpg'
import travelAndHospitality from '../images/travelAndHospitality.jpg'


function Industry() {
  useEffect(() => {
    document.title = 'Best Software Solutions for Big Industries';
  }, []);
  return (
    <div>
      <Header heading="Industries" title='Industries we deal' text1='For more info contact to our experts:'/>
      <h3 style={{textAlign: 'center', margin: '60px'}}>Our Industrial Experience</h3>
      <div className="container">
      <div className="row">
      <Card to="/Industries/Healthcare" imageUrl={healthCare} title="Healthcare" description="In today's world, healthcare is a multifaceted and dynamic industry that encompasses a wide range of services, technologies, and professionals, all working together to promote well-being and provide medical care. There's a growing emphasis on patient-centered care, focusing on individual needs, preferences, and involvement in decision-making."/>
      <Card to="/Industries/Retail-And-Ecommerce" imageUrl={retailAndEcommerce} title="Retail & Ecommerce" description="In the realm of retail and e-commerce, shopping has become a seamless and convenient experience. This industry offers a wide range of products and services, accessible with a click. Retail and e-commerce shape the way we shop and interact with the global marketplace. In this industry convenience and variety redefine the way we shop globally."/>
      <Card to="/Industries/Sports-And-Entertainment" imageUrl={sportsAndEntertainment} title="Sports & Entertainment" description="This dynamic industry is a fusion of athleticism, creativity, and technology, offering captivating experiences to audiences worldwide. From thrilling sports events that unite fans to captivating performances that inspire, the sports and entertainment sector continues to push boundaries and redefine the way we experience joy, excitement, and artistry. "/>
      <Card to="/Industries/Construction" imageUrl={construction} title="Construction" description="In the construction industry, we build the foundations of our world. It's a dynamic sector where innovation and craftsmanship come together to create the infrastructure, homes, and structures that shape our communities. Construction is about turning vision into reality, one project at a time."/>
      <Card to="/Industries/Insurance" imageUrl={insurance} title="Insurance" description="In the world of insurance, we provide protection and peace of mind. This industry offers financial security through policies that safeguard individuals and businesses from unexpected events. Insurance ensures that, with need, you can focus on recovery, knowing that you are covered."/>
      <Card to="/Industries/Travel-And-Hospitality" imageUrl={travelAndHospitality} title="Travel & Hospitality" description="In the professional realm of travel and hospitality, we are experienced in creating exceptional experiences. This industry is dedicated to providing top-notch services and accommodations, ensuring that travelers and guests receive a seamless and memorable journey."/>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Industry