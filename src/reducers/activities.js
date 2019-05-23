const activitiesDefaultState = []

export default (state = activitiesDefaultState, action) => {
  switch(action.type){
    case 'ADD_ANSWER':
      return [
        ...state,
        action.answer
      ]
    default:
      return state;
  }
}