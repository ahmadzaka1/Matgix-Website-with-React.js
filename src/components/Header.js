import React from 'react';
import './headerStyles.css';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className='header'>
        <big style={{fontSize: '45px', color: 'white', paddingBottom: '20px'}}>{props.heading}</big>
        <h5 className='container' style={{color: 'white', paddingBottom: '10px', textAlign: 'center'}}>{props.title}</h5>
        <p>{props.text1}</p>
        <Link to="/Contact"><button className="btn button rounded-pill" type="submit">Contact</button></Link>
    </div>
  )
}

export default Header