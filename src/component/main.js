import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

// ...
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({ type });

export { action, store };
