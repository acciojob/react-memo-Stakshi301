import React,{ useState } from "react";

const ExpensiveCalc = () => {
  const [count, setState] = useState(0);
  const [expensiveSet, expensiveSetState] = useState(1);

  const updateCountAndExpensive=()=>{
      setState((prev)=>prev+1);
      expensiveSetState((prev)=>prev * 2);
  }
  return <>
  <p>Count :{count}
  <button onClick={updateCountAndExpensive}>+</button>
  </p>
  <h3>Expensive Calculation</h3>
  <p>{expensiveSet}</p>
  <hr />
  <hr />
  </>;
};

export default ExpensiveCalc;
