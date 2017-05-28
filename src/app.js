import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';

import NavBar from './nav-bar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: [],
  };
  }

  componentWillMount(){
    var array = [];
    let myData2 = new Array();
    var url_ako = 'https://api.opendota.com/api/players/67762065';
	  var url_herb = 'https://api.opendota.com/api/players/267288896';
	  var url_tony = 'https://api.opendota.com/api/players/111997531';
	  var url_duy = 'https://api.opendota.com/api/players/379987949';
	  var url_tien = 'https://api.opendota.com/api/players/135084531';
    array.push(url_ako);
    array.push(url_herb);
    array.push(url_tony);
    array.push(url_duy);
    array.push(url_tien);


    //get player object from 
    console.log(array);
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
    var name1 = getName(this.state.myData);
    var avatar1 = getAvatar(this.state.myData);
    var data = this.state.myData;

    //console.log(this.state.myData);

    //{this.state.myData.solo_competitive_rank}
    //<img src = {avatar1}></img>
    console.log(data);

    const infoList = data.map((info)=>{
      //TO-DO 
        //console.log(info.solo_competitive_rank);
        var name = getName(info);
        var avatar = getAvatar(info);

        var feedback = 
          <tr>
            <td><img src={avatar} alt ="profile pic"></img></td>
            <td>{name}</td>
            <td>{info.solo_competitive_rank}</td>
          </tr>;

        return feedback;
        
    });
    
    return (
	
      <div className ="container-fluild">
        <NavBar />

        <div className ="content-section-a">
          <table className="table">
            <tbody>
                {infoList}
            </tbody>
          </table>
        </div>

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

export default App