import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Careers() {
  useEffect(() => {
    document.title = 'Join Us For A Rewarding Career';
  }, []);
  return (
    <div>
      <Header heading='Join Our Team' title="We're a dynamic team of software engineers shaping the future with innovative ideas and tech. Join us for career growth opportunities." text1='For more info contact to our experts:'/>
      <Footer/>
    </div>
  )
}

export default Careers