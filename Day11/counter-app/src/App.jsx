import { useState }  from "react";
import "./App.css";
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="count-app">
      <h1 className="heading"> Counter App</h1>
      <h1 className="count-disp">{count}</h1>
      <div className="count-body">
        <button className="count-btn" id="inc"
           onClick = {() => {
            setCount(count+1);
           }}>
            Increment
        </button>

        <button className="count-btn" id="res"
           onClick = {() => {
            setCount(0);
           }}>
            Reset
        </button>

        <button className="count-btn" id="dec"
           onClick = {() => {
            setCount(count-1);
           }}>
            Decrement
        </button>

      </div>
    </div>
  )
};
export default App;
