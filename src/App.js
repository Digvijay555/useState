import React,{useState} from "react";
import "./style.css";

// useState is hook which is used to manage state of react
// hook are predefined function of react
// The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.
export default function App() {

  // let [test, setState] = useState(0); 
  // test is state variable 
  //setState is a function which manage my value of state variable
  // useState(' ') default value of your state variable

  /*function increment()
  {
      setState(test+1);
  }

  function decrement()
  {
    setState(test-1);
  }*/

  ///////////////////// 2nd use of state with condition////////////////////////

  let [dayName, setName] = useState('Monday');
  let [state, setState] = useState(true);

  function changeName()
  {
    // this is the example of how to change 2 state at the same time
    setName('Tuesday');
    setState(false);
  }
  return (
    /* example of useState with increment or decrement value
    <div>
      <button onClick={increment}>+</button>
      <div>{test} This is check of state</div>
      <button onClick={decrement}>-</button>
    </div>*/
    
    ////////// Example of useState with based on condition //////////
    <div>
      <button onClick={changeName}>Change Name</button>
       {/* this is the example of how to change state and event in one line. */}
      <button onClick={()=>{setName('Monday'),setState(true)}}>Reset</button>
      <div>{dayName} This is check of state</div>

      {/* this is the way how to write js code in react you have to use curley braces */}
      {
        // ? is used for true condition
        // : is used for false condition
        state?
        <div style={{backgroundColor:"red"}}>when day name is monday</div>:
        <div style={{backgroundColor:"yellow"}}>when day name is Tuesday</div>
      }
      
    </div>
  );
}
