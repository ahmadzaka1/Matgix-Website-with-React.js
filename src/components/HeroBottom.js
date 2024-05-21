import React from 'react'
import { Link } from 'react-router-dom'

function HeroBottom() {
  return (
    <div>
        <div className="container" style={{ marginTop: "60px" }}>
        <div
          className="card"
          style={{
            width: "100%", padding: '2rem' ,
            boxShadow: "0px 5px 5px -5px rgba(0,0,0,0.75)", backgroundColor: "rgb(192, 67, 50)" , color: 'white'
          }}
        >
          <div className="card-body">
            <h2 className="card-title">Who Are We?</h2>

            <h5
              className="card-text"
              style={{ fontSize: "16px"  }}
            >
              We're a digital transformation consultancy and engineering company, revolutionizing businesses worldwide. Since 2017, we've empowered companies, startups, and established brands with innovative ERP solutions, driving their digital transformation journey.
            </h5>
          </div>
        </div>
        <div style={{ display: "flex" , justifyContent: "space-between" , marginTop: '10px' }}>
        <div
          className="card"
          style={{
            width: "33%", padding: '2rem' ,
            boxShadow: "0px 5px 5px -5px rgba(0,0,0,0.75)", backgroundColor: "rgb(192, 67, 50)" , color: 'white'
          }}
        >
          <div className="card-body">
            <h2 className="card-title">10+</h2>

            <h5
              className="card-text"
              style={{ fontSize: "16px"  }}
            >
            Years In Business
            </h5>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "33%", padding: '2rem' ,
            boxShadow: "0px 5px 5px -5px rgba(0,0,0,0.75)", backgroundColor: "rgb(192, 67, 50)" , color: 'white'
          }}
        >
          <div className="card-body">
            <h2 className="card-title">100+</h2>

            <h5
              className="card-text"
              style={{ fontSize: "16px"  }}
            >
            Projects
            </h5>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "33%", padding: '2rem' ,
            boxShadow: "0px 5px 5px -5px rgba(0,0,0,0.75)", backgroundColor: "rgb(192, 67, 50)" , color: 'white'
          }}
        >
          <div className="card-body">
            <h2 className="card-title">100+</h2>

            <h5
              className="card-text"
              style={{ fontSize: "16px"  }}
            >
            Team Members
            </h5>
          </div>
        </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "120px" }}>
        <div
          className="card"
          style={{
            width: "100%",
            boxShadow: "0px 5px 5px -5px rgba(0,0,0,0.75)",
          }}
        >
          <div className="card-body">
            <h4 className="card-title">Got A Project In Mind?</h4>

            <p
              className="card-text"
              style={{ fontSize: "16px", color: "#36454F" }}
            >
              Let's Talk and Get Started!
            </p>
            <Link to="/Contact">
              <button className="btn button btn-sm rounded-pill" type="submit">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default HeroBottom