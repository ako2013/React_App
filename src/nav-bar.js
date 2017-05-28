import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


import './app.css';

class NavBar extends React.Component{
	render(){
		return(
   <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link to = '/' className="navbar-brand">MMR Tracker</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to ='/details' className="nav-link disabled" >Disabled</Link>
          </li>
        </ul>
      </div>
    </nav>
    )
	}
}

export default NavBar; 
