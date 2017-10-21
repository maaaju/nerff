import { API_URL } from 'react-native-dotenv'

export function getTutor(tutorId) {
  return async dispatch => {
    onSuccess = tutor => {
      dispatch({ type: 'SET_TUTOR', tutor })
      return tutor
    }
    onError = error => {
      dispatch({ type: 'ERROR' })
      return error
    }
    try {
      let response = await fetch(`${API_URL}/tutor/${tutorId}`)
      response = await response.json()
      return onSuccess(response)
    } catch (error) {
      return onError(error)
    }
  }
}

export function updateTutorField(tutor) {
  return dispatch => {
    dispatch({ type: 'SET_TUTOR', tutor })
  }
}

export function saveTutor(tutorId, tutor) {
  return dispatch => {
    fetch(`${API_URL}/tutor/${tutorId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tutor: tutor,
      }),
    })
    dispatch({ type: 'SET_TUTOR', tutor })
  }
}
