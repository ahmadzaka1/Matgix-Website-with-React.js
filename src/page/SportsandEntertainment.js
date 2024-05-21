import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroBottom from '../components/HeroBottom'
import ERPNextCard from '../components/ERPNextCard'
import analyze from '../images/analyze-ecommerce.png'
import club from '../images/sports-club.png'
import gym from '../images/gym-sports.png'
import member from '../images/membership-sports.png'
import golf from '../images/golf-sports.png'
import fitness from '../images/fitness-sports.png'
import event from '../images/event-sports.png'
import performance from '../images/performance-sports.png'
import about from '../images/Sports-About.jpg'

function SportsandEntertainment() {
  useEffect(() => {
    document.title = 'Sports And Entertainment Industry';
  }, []);
  return (
    <div>
      <Header heading='Sports & Entertainment' title='Empowering Sports and Entertainment with Custom Software Solutions.' text1='For more info contact to our experts:'/>
      <div className='container'>
      <h3 style={{ textAlign: "center", marginTop: "120px" }}>
      Sports And Entertainment Services
      </h3>
      <h6 style={{ textAlign: "center", marginTop: "20px" }}>
      Our team crafts a comprehensive suite of sports analytics tools meticulously designed to deliver unparalleled performance insights. Our solutions feature customized data capture capabilities, catering to a wide spectrum of needs, from training and injury monitoring to tactical game analysis.      </h6>
      </div>
      <div className="container">
        <div className="row">
          <ERPNextCard imageUrl={analyze} title="Analysis Software" description="We specialize in sports video analysis software, including video editing, tagging, synchronization, and seamless playback across devices." />
          <ERPNextCard imageUrl={club} title="Club Management" description="Our extensive expertise in this field empowers startups to strategically plan and implement their SaaS application journey with precision." />
          <ERPNextCard imageUrl={gym} title="Gym Management Software" description="We create branded fitness apps with tracker integration, coaching, nutrition planning, class booking, and links to enhance user engagement." />
          <ERPNextCard imageUrl={member} title="Membership Management" description="Create efficient membership software with enrollment, digital signatures, payment tracking, photo ID, web portals, and integrated web/mobile apps." />
          <ERPNextCard imageUrl={golf} title="Golf Management" description="We craft tailored golf software to streamline operations, enhance player experiences, and optimize your golf business for private clubs, resorts, public courses, and more." />
          <ERPNextCard imageUrl={event} title="Event Management" description="We offer event and tournament management software, with features like player access portals, pairing optimization, live scores, and more with modern UI." />
          <ERPNextCard imageUrl={fitness} title="Fitness Application" description="Our team develops embedded, cloud-connected fitness tech with custom interfaces, motion tracking, and mobile app sync for tracking fitness." />
          <ERPNextCard imageUrl={performance} title="Performance insights" description="We implement custom athlete performance software for real-time insights, including motion and video analysis, wearables, and predictive analytics." />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{ marginTop: "120px", marginBottom: "20px", fontWeight: "bold" }}>
            About Sports And Entertainment Industry:
            </h4>
            <h6 style={{marginBottom: '20px' , lineHeight: 2}}>Sports entertainment is a captivating form of spectacle that prioritizes audience entertainment over traditional sporting competition. It combines athleticism with theatrical flair to deliver an electrifying experience. Unlike conventional sports, many outcomes in sports entertainment are scripted, agreed upon by participants, and openly acknowledged, distinguishing it from match-fixing or immorality. Popular in various forms like professional wrestling and mixed martial arts, sports entertainment offers dramatic storylines, larger-than-life characters, and choreographed performances that continue to engage audiences worldwide.</h6>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end align-items-center"
            style={{ marginTop: "120px" }}
          >
            <img
              src={about}
              alt="school management"
              style={{ height: "350px", width: "500px" }}
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
              Software Applications And Solutions For Sports And Entertainment Industry
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

export default SportsandEntertainment