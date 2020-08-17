import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundPic from '../images/youngPeople.jpg'

const useStyles = makeStyles(() => ({
    backgroundImage: `url(${backgroundPic})`,
    width: "100%",
    height: "auto"

  }));


  function LandingPage(){
      return(
          <div style={useStyles}></div>
      )
  }


  export default LandingPage;

  
