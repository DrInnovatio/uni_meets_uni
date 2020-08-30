import React from 'react';
import ImgMediaCard from './card.jsx';

// got these icons from   https://react-icons.github.io/search

import { FaApple } from 'react-icons/fa';
import { FaGooglePlay } from 'react-icons/fa';


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
  paddingTop: "3%"
};

const cards = {
  background: "#800020",
  display: "flex",
  justifyContent: 'space-around',
  paddingTop: "110vh",
  background: "green",
  paddingBottom: "4%"
}

const third = {
  width: "70%",
  height: "100%",
  background: "#800020",
  fontSize: "1.5rem",
  margin: "4% auto",
  color: "#29c7ac"
}

const icons = {
  fontSize: "50px",
  display: "flex",
  justifyContent: "center",
  margin: "4%"
}

export default class Landing extends React.Component {
  
  render() {
    return (
    <div>
      <div style={divStyle} >
        <div style={bannerText}>
            <h1>Uni Meets Uni</h1>  
            <p style={{paddingTop: "20px"}}>The New Way for socializing for uni students in Brisbane.</p> 
        </div>
      </div>

      /* The Second Part */
      <div style={cards}>
        <ImgMediaCard/>
        <ImgMediaCard/>
        <ImgMediaCard/>   
      </div>

      <div style={third}>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eligendi optio debitis incidunt laboriosam. Unde dolorem odit quo molestiae dolores quas iusto, reiciendis, ab necessitatibus eum est deserunt veniam corrupti suscipit accusantium, sunt quasi? Nam quibusdam nobis quos consequatur molestias?</p>
        <br/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nam culpa in. Veritatis rerum sed quia repudiandae minus? Quibusdam omnis at fugiat pariatur, nostrum maxime harum ea officia vitae minus, amet rerum, saepe labore error quod delectus esse impedit corrupti.</p>

        <div style={ icons }>
          <FaApple />
          <FaGooglePlay style={{paddingLeft:"30px"}}/>
        </div>

      </div>

    </div>
    );
  };
};
