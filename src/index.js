import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component{
	render(){
		return(
			<h2>MMR Tracking </h2>
		);
	}
}

class Web extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    myData : [],
		myData2 : [],
		myData3 : [],
		myData4 : [],
		myData5 : [],
    };
  }

  componentDidMount(){
      var url_ako = 'https://api.opendota.com/api/players/67762065';
	  var url_herb = 'https://api.opendota.com/api/players/267288896';
	  var url_tony = 'https://api.opendota.com/api/players/111997531';
	  var url_duy = 'https://api.opendota.com/api/players/379987949';
	  var url_tien = 'https://api.opendota.com/api/players/135084531';

      fetch(url_ako)
        .then((response)=> {
            if(response.status >= 400){
                throw new Error  ("Bad response from server");
            }
            return response.json();
        })
        .then((data) =>{
            this.setState({myData : data});
            //console.log(myData);
        });
		
		fetch(url_herb)
        .then((response)=> {
            if(response.status >= 400){
                throw new Error  ("Bad response from server");
            }
            return response.json();
        })
        .then((data) =>{
            this.setState({myData2 : data});
            //console.log(myData);
        });
		
		fetch(url_tony)
        .then((response)=> {
            if(response.status >= 400){
                throw new Error  ("Bad response from server");
            }
            return response.json();
        })
        .then((data) =>{
            this.setState({myData3 : data});
            //console.log(myData);
        });
		
		fetch(url_duy)
        .then((response)=> {
            if(response.status >= 400){
                throw new Error  ("Bad response from server");
            }
            return response.json();
        })
        .then((data) =>{
            this.setState({myData4 : data});
            //console.log(myData);
        });
		
		fetch(url_tien)
        .then((response)=> {
            if(response.status >= 400){
                throw new Error  ("Bad response from server");
            }
            return response.json();
        })
        .then((data) =>{
            this.setState({myData5 : data});
            //console.log(myData);
        });
  }
  render() {    
    var name1 = getName(this.state.myData);
    var name2 = getName(this.state.myData2);
    var name3 = getName(this.state.myData3);
    var name4 = getName(this.state.myData4);
    var name5 = getName(this.state.myData5);

    var avatar1 = getAvatar(this.state.myData);
    var avatar2 = getAvatar(this.state.myData2);
    var avatar3 = getAvatar(this.state.myData3);
    var avatar4 = getAvatar(this.state.myData4);
    var avatar5 = getAvatar(this.state.myData5);

    console.log(this.state.myData);
    
    return (
	
      <div className="game">
        <div className="game-board">
			<Header />
      <img src = {avatar1}></img> ({name1}) <b>Ako Solo</b>: {this.state.myData.solo_competitive_rank} <br/> 
      <img src = {avatar2}></img> ({name2}) <b>Herb Solo</b>: {this.state.myData2.solo_competitive_rank} <br/>
			<img src = {avatar3}></img> ({name3}) <b>Tony Solo</b>: {this.state.myData3.solo_competitive_rank} <br/>
			<img src = {avatar4}></img> ({name4}) <b>Duy Solo</b>: {this.state.myData4.solo_competitive_rank} <br/>
			<img src = {avatar5}></img> ({name5}) <b>Tien Solo</b>: {this.state.myData5.solo_competitive_rank} <br/>
			
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

// ========================================

ReactDOM.render(
  
  <Web />,
  document.getElementById('root')
);
