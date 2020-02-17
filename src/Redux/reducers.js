export default function reducerFunc(
state = {
  countArr: []
},
  action
) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        countArr: state.countArr + 1
      }
    case 'DECREMENT':
    return {
      ...state,
      countArr: state.countArr - 1
    }
    default:
      return state
  }
}
