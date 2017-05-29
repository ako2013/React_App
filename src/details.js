import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './nav-bar';



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

    </div>
    )
  }


// ========================================

export default Details 
