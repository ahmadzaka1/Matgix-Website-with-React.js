import React from 'react'
import { Link } from 'react-router-dom'

function ERPNextCard(props) {
  return (
    <div className="col-lg-4 col-md-6 col-12 my-2">
<Link to={props.to} style={{textDecoration: 'none'}}>
      <div className="card" style={{ width: "22rem" , backgroundColor: 'white', display: 'flex' , justifyContent: "center", alignItems: "center" , boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.2)'  }}>
        <img src={props.imageUrl} className="card-img-top" alt="Pic" style={{ height: "4rem", width:'4rem' }} />
        <div className="card-body">
          <h6 style={{paddingTop:'10px' , paddingBottom:'10px', fontWeight: 'bold'}} className="card-title">{props.title}</h6>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default ERPNextCard