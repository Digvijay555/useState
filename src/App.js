import React,{useState} from "react";
import "./style.css";

// state is hook 
export default function App() {

  let [test, setState] = useState(0);

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
