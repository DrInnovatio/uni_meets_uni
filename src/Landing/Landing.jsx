import React from 'react';
import ImgMediaCard from './card.jsx';

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
  position: "relative",
  textAlign: "center",
  paddingTop: ""
};

const cards = {
  display: "flex",
  justifyContent: 'space-around',
  paddingTop: "110vh",
  background: "green"
}

export default class Landing extends React.Component {
  
  render() {
    return (
    <div>
      <div style={divStyle} >
        <div style={bannerText}>
            <h1>Uni Meets Uni</h1>  
            <p>The New Way for Socializing</p> 
        </div>
      </div>
      <div style={cards}>
        <ImgMediaCard/>
        <ImgMediaCard/>
        <ImgMediaCard/>
      </div>
    </div>
    );
  }
}