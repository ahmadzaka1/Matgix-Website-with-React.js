import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroBottom from '../components/HeroBottom'
import Card from '../components/Card'
import consultancy from '../images/consultancy-solutions.avif'
import inventory from '../images/inventory-solution.png'
import implement from '../images/update-technology.jpg'
import optimization from '../images/optimization-solution.jpg'
import efficient from '../images/efficient-inventory-solution.webp'
import data from '../images/analyzing-data.jpg'
import benefit from '../images/inventory-benefit-solution.png'

function InventoryManagementSystem() {
  useEffect(() => {
    document.title = 'Inventory Management System';
  }, []);
  return (
    <div>
      <Header heading='Inventory Management System Development' title='Streamline Your Inventory Management Efforts for Improved Efficiency' text1='For more info contact to our experts:'/>
      <div className='container'>
      <h3 style={{ textAlign: "center", marginTop: "120px" }}>
      Our Inventory Management System
      </h3>
      <h6 style={{ textAlign: "center", marginTop: "20px" }}>
      Embrace advanced inventory management. As your products and customer base become more complex, our custom system is tailored to suit your evolving needs.
      </h6>
      </div>
      <div className="container">
        <div className="row">
          <Card
            
            imageUrl={consultancy}
            title="Consultancy"
            description="Customize your inventory management to meet unique business needs. Our consulting team analyzes your operations and identifies essential features for an industry-leading system."
          />
          <Card
            
            imageUrl={inventory}
            title="Custom Development"
            description="We customize the product to your specific needs, offering unique features, advanced analytics, a cloud-based solution, and responsive design to provide a seamless experience for your business."
          />
          <Card
            
            imageUrl={implement}
            title="Smooth Implementation"
            description="After your system is developed, it's time for implementation. We've got the whole implementation process covered. We install the software, connect all necessary tools, and ensure it's ready to go for you."
          />
          <Card
            
            imageUrl={optimization}
            title="Inventory Optimization"
            description="Efficiently manage inventory and automate restocking based on custom thresholds. Easily track components, products, and financial data, improving your inventory control in a professional way."
          />
          <Card
            
            imageUrl={efficient}
            title="Efficient System"
            description="This system integrates seamlessly with the cloud, allowing you to manage multiple inventories globally and fulfill E-commerce orders automatically, all with real-time updates using the cloud's capabilities."
          />
          <Card
            
            imageUrl={data}
            title="Analyzing Data"
            description="This system compiles and analyzes data, providing automated performance and statistics. This data not only offers comprehensive insights but also helps in improving performance and optimizing inventory efficiency."
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{ marginTop: "120px", marginBottom: "20px", fontWeight: "bold" }}>
            
            Customized Inventory Automation:
            </h4>
            <ul>
  <li style={{ marginBottom: '20px' }}>
    <b>Optimized Inventory Control:</b> Achieve greater control over your inventory, reducing waste and improving stock levels.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Enhanced Efficiency:</b> Automate inventory-related tasks, streamlining operations and saving time.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Error Reduction:</b>  Minimize manual errors in tracking inventory, ensuring accuracy in orders and customer satisfaction.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Real-time Data Access:</b> Access up-to-the-minute inventory data for quick decision-making and efficient supply chain management.
  </li>
  <li style={{ marginBottom: '20px' }}>
    <b>Cost Efficiency:</b> Decrease carrying costs and reduce losses through improved inventory management, ultimately boosting your bottom line.
  </li>
</ul>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={benefit}
              alt="inventory management"
              style={{ height: "400px", width: "500px" }}
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
              Manage your inventory effortlessly with our software solution.
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

export default InventoryManagementSystem