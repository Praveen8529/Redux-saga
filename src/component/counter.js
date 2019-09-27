import React from "react";
import "../styles.css";



const Counter = ({
  value,
  onIncrement,
  onDecrement,
  onIncrementAsync,
  onFetchtakeEvery, onFetchtakeLatest
}) => {
  return (
    <div className="App">
      {/*<button onClick={onIncrementAsync}>Increment after 1 second</button>{" "}
      <button onClick={onIncrement}>Increment</button>{" "}
      <button onClick={onDecrement}>Decrement</button>*/}
        <a href="#" className="button2" onClick={onFetchtakeEvery}>Fetch by takeEvery</a>
        <a href="#" className="button2" onClick={onFetchtakeLatest}>Fetch by takeLatest</a>
      <hr />
      <div>clicked: {value.count} times</div>
      {/*<div>{value.rotate ? <div>Wait.......</div> : <div />}</div>*/}
        <DisplayGridData userData={value.userData} />
    </div>
  );
};
export default Counter;


const DisplayGridData=(userData)=>{
  //  console.log(userData);
    return(<div> <br/>{userData.userData.map(name=><div>Name :  {name.first}</div>)}</div>);
}


