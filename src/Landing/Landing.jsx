import React from 'react'
//import { makeStyles } from '@material-ui/core/styles'
import backgroundPic from '../images/youngPeople.jpg'

function LandingPage() {
  return (
    <div styles={ { backgroundImage: `url(${backgroundPic})` } }>
      <h1>This is red car</h1>
    </div>
  )
}

export default LandingPage;
