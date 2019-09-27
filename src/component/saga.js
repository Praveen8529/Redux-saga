import { put, call, takeEvery, all, takeLatest, select, take } from "redux-saga/effects";

const delay = ms => new Promise(res => setTimeout(res, ms));

const URL = "https://randomuser.me/api/?results=1&inc=name,registered&nat=fr";

function* fetchUserData() {
  yield takeLatest("FETCH_LATEST_REQUESTED", fetchLatestData);
  yield takeEvery("FETCH_EVERY_REQUESTED", fetchEveryData);
}

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
 // console.log("saga ends at incrementAsync");
  yield put({ type: "Rotate" });
  yield call(delay, 5000);
  yield put({ type: "INCREMENT" });
  yield put({ type: "Rotate" });
  //console.log("incrementAsync ends");
}

export function* incrementAsyncParrel() {
  //console.log("saga ends at incrementAsyncParrel");
  yield put({ type: "INCREMENT" });
}

export function* fetchLatestData() {
  const json = yield fetch(URL).then(response => response.json());
//  console.log(Math.random())
  //console.log("fetchData" + JSON.stringify(json.results[0].name));
  yield put({ type: "FETCH_LATEST_REQUESTED_SUCCESS",payload:json.results[0].name });
}
export function* fetchEveryData() {
  const json = yield fetch(URL).then(response => response.json());
 // console.log(Math.random())
 // console.log("fetchData" + JSON.stringify(json.results[0].name));
  yield put({ type: "FETCH_EVERY_REQUESTED_SUCCESS",payload:json.results[0].name});
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
 // console.log("saga Started at watch");
  yield takeEvery("INCREMENT_ASYNC_PARREL", incrementAsyncParrel);
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

function* watchAndLog() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select()

    console.log('action', action)
    console.log('state after', state)
  })
}

function* watchAndLogTake() {
  while (true) {
    const action = yield take('*')
    const state = yield select()

    console.log('action', action)
    console.log('state after', state)
  }
}


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
//  console.log("saga Started at Root");
 yield all([fetchUserData(), watchIncrementAsync()]);
 // yield all([watchAndLogTake()]);
}
