import ReactDOM from "react-dom";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
      <div style={{ backgroundColor: "green" }}>
        BasketBall
        <button onClick={handleClick}>red ball sport</button>
      </div>

      <div style={{ backgroundColor: "red" }}>
        VolleyBall
        <button onClick={handleClick}>haikyuu</button>
      </div>
    </ReactCardFlip>
  );
};

// ReactDOM.render(<CardFlip />, document.QuerySelector("#root"));
export default CardFlip;
