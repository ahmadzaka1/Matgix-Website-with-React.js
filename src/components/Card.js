import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    
<div className="col-lg-4 col-md-6 col-12 my-3">
<Link to={props.to} style={{textDecoration: 'none'}}>
      <div className="card" style={{ width: "22rem" , backgroundColor: 'white' , boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.2)' }}>
        <img src={props.imageUrl} className="card-img-top" alt="Pic" style={{ height: "15rem" }} />
        <div className="card-body">
          <h5 style={{paddingTop:'10px' , paddingBottom:'10px'}} className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
      </Link>
    </div>
    
  );
}

export default Card;
