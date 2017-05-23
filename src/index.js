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
	  var url_tien = 'https://api.opendota.com/api/players/357425650';

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
    //const personLoc = Object.keys(this.state.myData)

    //console.log(this.state.myData);
    return (
	
      <div className="game">
        <div className="game-board">
			<Header />
            <b>Ako Solo</b>: {this.state.myData.solo_competitive_rank}
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  
  <Web />,
  document.getElementById('root')
);
