import React,{useState} from "react";
import "./style.css";

// useState is hook which is used to manage state of react
// hook are predefined function of react
export default function App() {

  let [test, setState] = useState(0); 
  // test is state variable 
  //setState is a function which manage my value of state variable
  // useState(' ') default value of your state variable

  function increment()
  {
      setState(test+1);
  }

  function decrement()
  {
    setState(test-1);
  }
  return (
    <div>
      <button onClick={increment}>+</button>
      <div>{test} This is check of state</div>
      <button onClick={decrement}>-</button>
    </div>
  );
}
