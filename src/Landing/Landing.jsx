import React from 'react'

const backgroundImage = require('../images/youngPeople.jpg');

const divStyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: '100%',
  position: "absolute"
};

const bannerText = {
  background: "pink",
  boxShadow: "5px 10px #800020",
  width: "50%",
  height: "200px",
  borderRadius: "10px",
  opacity: "0.8",
  margin: "27% 25%",
  position: "fixed",
  textAlign: "center",
  paddingTop: ""
};

export default class Landing extends React.Component {
  
  render() {
    return (
      <div style={divStyle} >
        <div style={bannerText}>
              <h1>Uni Meets Uni</h1>  
              <p>The New Way for Socializing</p> 
        </div>
      </div>
    );
  }
}