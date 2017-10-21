import { API_URL } from 'react-native-dotenv'
import Constants from './constants'

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
