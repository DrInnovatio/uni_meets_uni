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