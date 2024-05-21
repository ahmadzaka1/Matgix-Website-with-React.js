import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function TermsandConditions() {
  useEffect(() => {
    document.title = 'Terms And Conditions';
  }, []);
  return (
    <div>
      <Header heading='Terms and Conditions' text1='For more info contact to our experts:'/>
      <Footer/>
    </div>
  )
}

export default TermsandConditions