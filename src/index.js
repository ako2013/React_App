import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Nav extends React.Component{
	render(){
		return(
    <div className ="container-fluild">
      <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
          <a className="navbar-brand topnav">MMR Tracking</a>
      </nav>
    </div>
		);
	}
}

class Header extends React.Component{

  render(){
    return(
      <div>
        <a name="about"></a>
        <div class="intro-header">
          <div class="container">

              <div class="row">
                  <div class="col-lg-12">
                      <div class="intro-message">
                          <hr class="intro-divider"/>
                          <ul class="list-inline intro-social-buttons">
                              <li>
                                  <a href="https://twitter.com/SBootstrap" class="btn btn-default btn-lg"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
                              </li>
                              <li>
                                  <a href="https://github.com/IronSummitMedia/startbootstrap" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
                              </li>
                              <li>
                                  <a href="#" class="btn btn-default btn-lg"><i class="fa fa-linkedin fa-fw"></i> <span class="network-name">Linkedin</span></a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>

          </div>
      </div>
    </div>
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
	
      <div className ="container-fluild">
        <Nav />
        <div className ="content-section-a">
          <table className="table">
            <thread>
              <tr>
                <th>Avatar</th>
                <th>Nick</th>
                <th>Alias</th>
                <th>Solo MMR</th>
              </tr>
            </thread>
            <tbody>
              <tr>
                <td><img src = {avatar1}></img></td>
                <td>{name1}</td>
                <td>Ako</td>
                <td>{this.state.myData.solo_competitive_rank}</td>
              </tr>
              <tr>
                <td><img src = {avatar2}></img></td>
                <td>{name2}</td>
                <td>Herb</td>
                <td>{this.state.myData2.solo_competitive_rank}</td>
              </tr>
              <tr>
                <td><img src = {avatar3}></img></td>
                <td>{name3}</td>
                <td>Tony</td>
                <td>{this.state.myData3.solo_competitive_rank}</td>
              </tr>
              <tr>
                <td><img src = {avatar4}></img></td>
                <td>{name1}</td>
                <td>Duy</td>
                <td>{this.state.myData4.solo_competitive_rank}</td>
              </tr>
              <tr>
                <td><img src = {avatar5}></img></td>
                <td>{name1}</td>
                <td>Tien</td>
                <td>{this.state.myData5.solo_competitive_rank}</td>
              </tr>
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

// ========================================

ReactDOM.render(
  
  <Web />,
  document.getElementById('root')
);
