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

const CardFlip = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);

  const handleClick1 = () => setIsFlipped1(!isFlipped1);
  const handleClick2 = () => setIsFlipped2(!isFlipped2);

  return (
    <div>
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
            marginTop: "100px"
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1>Basketball</h1>
            <p>Click for Description!</p>
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
            <h1>Box 1 (flipped)</h1>
            <p>Click to flip back</p>
            <button onClick={handleClick1}>Flip back</button>
          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={isFlipped2} flipDirection="vertical">
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
            <h1>VolleyBall</h1>
            <p>Click to flip</p>
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
            <h1>Box 2 (flipped)</h1>
            <p>Click to flip back</p>
            <button onClick={handleClick2}>Flip back</button>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default CardFlip;