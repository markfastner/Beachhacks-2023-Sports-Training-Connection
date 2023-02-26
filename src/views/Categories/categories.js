// // import ReactDOM from "react-dom";
// // import React, { useState } from "react";
// // import ReactCardFlip from "react-card-flip";




// // const CardFlip = () => {

// //     const [isFlipped, setIsFlipped] = useState(false);
// //     const handleClick = () => 
// //     {


// //         setIsFlipped(!isFlipped);

// //     };




// //     return (
// //     <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
// //         <div style = {{ backgroundColor: "green"}}>
// //             BasketBall
// //           <button onClick={handleClick}>red ball sport</button>
// //         </div> 

// //         <div style = {{backgroundColor: "red"}}>
// //           VolleyBall
// //           <button onClick={handleClick}>haikyuu</button>
// //         </div>
// //       </ReactCardFlip>
// //     );
// // };

// // ReactDOM.render(<CardFlip/>, document.QuerySelector("#root"));
// // export default CardFlip;

// import ReactDOM from "react-dom";
// import React, { useState } from "react";
// import ReactCardFlip from "react-card-flip";

// const CardFlip = () => {

//     const [isFlipped, setIsFlipped] = useState(false);

//     const handleClick = () => {
//         setIsFlipped(!isFlipped);
//     };

//     return (
//       <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
//         <div style={{ backgroundColor: "green" }}>
//           BasketBall
//           <button onClick={handleClick}>red ball sport</button>
//         </div>

//         <div style={{ backgroundColor: "red" }}>
//           VolleyBall
//           <button onClick={handleClick}>haikyuu</button>
//         </div>
//       </ReactCardFlip>
//     );
// };

// ReactDOM.render(<CardFlip />, document.querySelector("#root"));

// export default CardFlip;

import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Navbar from "../../navbar/NavBar";

const CardFlip = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3]= useState(false); 
  const [isFlipped4, setIsFlipped4] = useState(false);

  const handleClick1 = () => setIsFlipped1(!isFlipped1);
  const handleClick2 = () => setIsFlipped2(!isFlipped2);
  const handleClick3 = () => setIsFlipped3(!isFlipped3);
  const handleClick4 = () => setIsFlipped4(!isFlipped4);


  return (
    <div>
      <Navbar />
      
      <ReactCardFlip isFlipped={isFlipped1} flipDirection="vertical">
        <div
          style={{
            backgroundColor: "green",
            width: "200px",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            borderRadius: "10px",
            marginTop: "200px"
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1 style = {{fontSize: "33px", color: "white   "}}>WeightLifting</h1>
            <button onClick={handleClick1}>Flip</button>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "red",
            width: "200px",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            borderRadius: "10px"
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1 style = {{fontSize: "10px"}}> Weightlifting works out different muscles depending on the type of exercise you do. Some of the major muscle groups that weightlifting can target are chest, back, shoulders, quads, glutes, hamstrings, biceps and triceps123. You can do exercises like bench press, overhead press, deadlift, squat, curl and dip to work these muscles.</h1>
            <button onClick={handleClick1}>Flip back</button>
          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={isFlipped2} flipDirection="vertical">
        <div
          style={{
            backgroundColor: "Yellow",
            width: "200px",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            borderRadius: "10px",
            marginTop: "100px"
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1 style = {{fontSize: "40px"}}>Soccer</h1>
            
            <button onClick={handleClick2}>Flip</button>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "orange",
            width: "200px",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            borderRadius: "10px"
          }}
        >
          <div style={{ textAlign: "center" }}>
          <h1 style={{fontSize: "10px", color: "black"}}>
          Soccer works out many muscles in your body. Some of the main ones are quadriceps, hamstrings, gluteus maximus, abductors, adductors, latissimus dorsi, trapezius and biceps1. These muscles help you with kicking, sprinting, tackling, jumping and controlling the ball12. You can do exercises like lateral deficit squats, split squat jumps, single-leg Romanian deadlifts, push-ups and Australian pull-ups to strengthen these muscles </h1> 
            <button onClick={handleClick2}>Flip back</button>
          </div>
        </div>
      </ReactCardFlip>
      <ReactCardFlip isFlipped={isFlipped3} flipDirection="vertical">
        <div
        
          style={{
            backgroundColor: "blue",
            width: "200px",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            borderRadius: "10px",
            marginTop: "100px"
          }}
        >
    
          <div style={{ textAlign: "center" }}>
            
            <h1 style={{fontSize: "40px", color: "Yellow"}}>VolleyBall</h1> 
            
             




            
            <button onClick={handleClick3}>Flip</button>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "orange",
            width: "200px",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            borderRadius: "10px"
          }}
        >
          <div style={{ textAlign: "center" }}>
            
            
            <h1 style={{fontSize: "9px"}}>

Some of the muscle groups that volleyball works out are:

The shoulders and arms, which are used for spiking, blocking, serving and passing the ball.
The core muscles, which help stabilize the body and generate power for movements.
The legs and glutes, which are used for jumping, squatting, lunging and moving around the court.</h1>
 
            <button onClick={handleClick3}>Flip back</button>
          </div>
        </div>
        </ReactCardFlip>
  

    
    </div>
    
  );
};





export default CardFlip;