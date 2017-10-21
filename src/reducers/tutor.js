const initialState = {
  currentTutor: {},
}
const tutor = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_TUTOR': {
      return {
        currentTutor: action.tutor,
      }
    }
    default:
      return state
  }
}

export default tutor
