import React from 'react';
import { Link } from 'react-router-dom';

import './app.css';

import NavBar from './nav-bar';
import Footer from './footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: [],
  };
  }

  componentWillMount(){
    var array = [];
    let myData2 = [];
    var url_ako = 'https://api.opendota.com/api/players/67762065';
	  var url_herb = 'https://api.opendota.com/api/players/267288896';
	  var url_tony = 'https://api.opendota.com/api/players/111997531';
	  var url_duy = 'https://api.opendota.com/api/players/379987949';
	  var url_tien = 'https://api.opendota.com/api/players/135084531';
    var url_minh = 'https://api.opendota.com/api/players/197673722';
    var url_quan = 'https://api.opendota.com/api/players/169149896';

    array.push(url_ako);
    array.push(url_herb);
    array.push(url_tony);
    array.push(url_duy);
    array.push(url_tien);
    array.push(url_minh);
    array.push(url_quan);

    //get player object from 
    //console.log(array);
    for(let item in array){
      fetch(array[item])
        .then((response)=> {
            if(response.status >= 400){
                throw new Error  ("Bad response from server");
            }
            return response.json();
        })
        .then((data) =>{
            myData2.push(data);
            //item starts from 1
            this.setState({myData: myData2});
        });
    }
  }

  render() {    
    var data = this.state.myData;

    //console.log(data);

    const infoList = data.map((info)=>{
        var name = getName(info);
        var avatar = getAvatar(info);
        var changes = getChanges(info);

        var color;
        var positive = "#008000";
        var negative = "#FF0000";
        if(changes > 0) color = positive;
        else color = negative; 

        //console.log(color);

        var feedback = 
          <tr>
            <td className="animated rotateInDownLeft"><img src={avatar} className="img-fluid" alt ="profile pic"></img></td>
            <td className="animated bounceInDown">{name}</td>
            <td className="animated bounceInDown">{info.solo_competitive_rank}</td>
            <td className="animated rotateInDownRight">{changes}</td>
          </tr>;

        return feedback;
        
    });
    
    return (
      <div className>
        <NavBar />
        <div className = "row">
          <div className = "col-md-2"></div>
          <div className = "col-md-8">
            <table className="table">
              <thead className="thead-inverse">
                <tr>
                <th className="animated rotateInDownLeft">Avatar</th>
                  <th className="animated slideInDown">Nick</th>
                  <th className="animated slideInDown">Solo MMR</th>
                  <th className="animated rotateInDownRight">Changes</th>
                </tr>
              </thead>
                <tbody>
                      {infoList}
                </tbody>
              </table>
          </div>
          <div className = "col-md-2"></div>
        </div>
          <Footer/>
      </div>
          
    );
  }
}

function getName (object){
  var name;

  for(var key in object){
    if(object.hasOwnProperty(key)){
      if(object[key] != null) name = object[key].personaname;
    }
  }
  return name;
}

function getAvatar (object){
  var name;

  for(var key in object){
    if(object.hasOwnProperty(key)){
      if(object[key] != null) name = object[key].avatarmedium;
    }
  }
  return name;
}

//calculate changes in mmr using api and local json file
function getChanges (object){
    var file = require('./mmr.json');
    var name;

    //get the UID
    for(var key in object){
      if(object.hasOwnProperty(key)){
        if(object[key] != null) name = object[key].account_id;
      }
    }

    //iterate through stored JSON file
    for(let item in file) {
      if(item === name) return object.solo_competitive_rank - file[item];
    }
    return 0;
}

export default App