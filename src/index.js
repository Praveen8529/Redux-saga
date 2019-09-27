import React from "react";
import ReactDOM from "react-dom";
import Counter from "./component/counter";
import { action, store } from "./component/main";


render();
store.subscribe(render);

function render() {
  ReactDOM.render(
    <>
      <Counter
        value={store.getState()}
        onIncrement={() => action("INCREMENT")}
        onDecrement={() => action("DECREMENT")}
        onIncrementAsync={() => {
          action("INCREMENT_ASYNC");
          action("INCREMENT_ASYNC_PARREL");
        }}
        onFetchtakeEvery={() =>{
            action("INCREMENT");
             action("FETCH_EVERY_REQUESTED");}}
        onFetchtakeLatest={() => {
            action("INCREMENT");
            action("FETCH_LATEST_REQUESTED");}
        }
      />
    </>,
    document.getElementById("root")
  );
}
