<<<<<<< HEAD
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import backgroundPic from './images/youngPeople'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  }
})

function LandingPage () {
  const pic = backgroundPic

  return <div>{this.pic}</div>
}

export default LandingPage
=======
import React from "react";
// import { makeStyles } from "@material-ui/core/styles";

import cook from '../images/cooking.jpg'

function LandingPage() {
                             return (
    <div  styles={{ backgroundImage:`url(${cook})` }}>
                     <h1>This is red car</h1>
    </div>);}

export default LandingPage;

// import Background from '../images/youngPeople.jpg';


// const sectionStyle = {
//   width: "100%",
//   height: "400px",
//   backgroundImage: "url(" + { Background } + ")"
// };

// class LandingPage extends React.Component {
//   render() {
//     return (
//         <>
//       <section style={ sectionStyle }>
//       </section>
//       <h1>show me the picture</h1>
//       </>
//     );
//   }
// }

// export default LandingPage;
>>>>>>> 82fe55d05dcf0f80f6d3457b742c352169aeae89
