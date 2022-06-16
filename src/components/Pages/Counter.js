import React, { useState } from "react";
import { useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);
  //const[stateVariable,function]=useState(initial Value)
  //stateVariable-> variable whose state is stored
  // function-> function to update state or state variable
  //initial value-> starting/initial value
  //''->string
  //[]->array
  //() -> object

  //   useeffect((),[])
  //useEffect((function),[stateVariable])
  //function-> effects to be seen
  //[stateVariable]-> variable that will be trigger the function
  const [data, setData] = useState(50);
  const increase_count = () => {
    setCount(count + 1);
  };

  useEffect(() => window.alert("count is updated", count), []);
  return (
    <>
      <div className="container-fluid">
        <div className="container-title text-center">
            <h1>Count</h1>
        </div>
        
        <div className="container text-center">count: {count}</div>

        <div className="container text-center">
          <button
            className="btn btn-danger m-2"
            onClick={() => {
              return setCount(count - 1);
            }}
          >
            Decrease count
          </button>

          <button className="btn btn-warning m-2" onClick={increase_count}>
            Increase count
          </button>

          <button
            className="btn btn-secondary m-2"
            onClick={() => {
              return setCount(0);
            }}
          >
            Reset
          </button>
        </div>
        <br />
        <hr />
        <div className="container-title text-center">
            <h1>Data</h1>
        </div>
        
        <div className="container text-center">
            Data:{data}
        </div>
        <div className="container text-center">
          <button
            className="btn btn-danger m-2"
            onClick={() => {
              return setData(data - 10);
            }}
          >
            Decrease data
          </button>

          <button
            className="btn btn-warning m-2"
            onClick={() => {
              return setData(data + 10);
            }}
          >
            Increase data
          </button>

          <button
            className="btn btn-secondary m-2"
            onClick={() => {
              return setData(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
