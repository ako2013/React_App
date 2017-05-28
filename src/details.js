import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './nav-bar';
import Details_ID from './details_id';



class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: [],
  };
  }

  componentWillMount(){
  }

  render() {    
      console.log("Details rendered");
    return (
      <div>
        <NavBar/>
        <h1>Detail page</h1>
      </div>
    );
  }
}


// ========================================

export default Details 
