import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function OurTeam() {
  useEffect(() => {
    document.title = 'Our Workforce of Experienced Developers and Industry Leaders';
  }, []);
  return (
    <div>
      <Header heading='A Leading and Experienced Team' title='We have a team of experienced technical and functional consultants and developers, driving digital transformation with expertise and dedication.' text1='For more info contact to our experts:'/>
      <Footer/>
    </div>
  )
}

export default OurTeam