import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './nav-bar';



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
        <h3> In progress </h3>
      </div>
    );
  }
}


// ========================================

export default Details 
