import React from 'react';

import NavBar from './nav-bar';
import Footer from './footer';

import './details.css';



  const Details = (props) => {

    //console.log(props);

    var url = 'https://api.opendota.com/api/players/67762065/matches?limit=10';
    fetch(url)
        .then((response)=> {
            if(response.status >= 400){
                throw new Error  ("Bad response from server");
            }
            return response.json();
        })
        .then((data) =>{
            //console.log(data);
        });

    return (
        <div>
            <NavBar/>
            <div className ="animation">Hi sweetie</div>
            <h1 className="animated infinite bounce">Example</h1>

        </div>
    )
  }


// ========================================

export default Details 
