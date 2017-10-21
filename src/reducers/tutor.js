const initialState = {
  name: 'action.name',
  age: '0',
  topics: 'action.topics',
  mail: 'action.mail',
  phone: '0',
  description: 'action.description',
}
const tutor = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'UPDATE_TUTOR': {
      return {
        ...state,
        name: action.name,
        age: action.age,
        topics: action.topics,
        mail: action.mail,
        phone: action.phone,
        description: action.description,
      }
    }
    default:
      return state
  }
}

export default tutor
