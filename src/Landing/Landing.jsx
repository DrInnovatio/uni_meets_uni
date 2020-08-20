import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


const backgroundImage = require('../images/youngPeople.jpg');

const divStyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover'
};

export default class Landing extends React.Component {
  render() {
    return (
      <div style={divStyle} >
        <h1 align="center">Some header example</h1>
      </div>
    );
  }
}