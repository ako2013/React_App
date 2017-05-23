import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Web extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        myData : [],
    };
  }

  componentDidMount(){
      var url = 'https://api.opendota.com/api/players/67762065';

      fetch(url)
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
  }
  

  render() {
    //const personLoc = Object.keys(this.state.myData)

    console.log(this.state.myData);
    return (
      <div className="game">
        <div className="game-board">
            {this.state.myData.solo_competitive_rank}
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
