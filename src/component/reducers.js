export default function counter(state = { count: 0, rotate: false,userData:[]}, action) {
  //console.log(state);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "INCREMENT_IF_ODD":
      return state.count % 2 !== 0 ? state + 1 : state;
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "Rotate":
      return { ...state, rotate: !state.rotate };
   case "FETCH_LATEST_REQUESTED_SUCCESS":
   //  console.log(action.payload)
     return {...state,userData:state.userData.concat(action.payload)};
    case "FETCH_EVERY_REQUESTED_SUCCESS":
      //console.log(action.payload)
      return {...state,userData:state.userData.concat(action.payload)};
    default:
      return state;
  }
}
