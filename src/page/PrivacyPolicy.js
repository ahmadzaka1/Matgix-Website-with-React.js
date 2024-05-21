import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Our Privacy Policy';
  }, []);
  return (
    <div>
      <Header heading='Privacy Policy' text1='For more info contact to our experts:'/>
      <Footer/>
    </div>
  )
}

export default PrivacyPolicy