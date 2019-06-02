import { combineReducers } from 'redux'

const defaultState = {
  isInit: true,
  isLoading: false,
  isSuccess: false,
  isError: false,
  msg: ''
}

// factory function
const createReducer = ({
  defaultState,
  onStart,
  onSuccess,
  onError
}) => (state = defaultState, action) => {
  switch(action.type) {
    case onStart:
      return {
        ...state,
        isInit: false,
        isLoading: true
      }
    case onSuccess:
      return {
        ...state,
        isInit: false,
        isLoading: false,
        isSuccess: true,
        isError: false,
        msg: action.data ? action.data.msg : ''
      }
    case onError:
      return {
        ...state,
        isInit: false,
        isLoading: false,
        isSuccess: false,
        isError: true,
        msg: action.data ? action.data.msg : ''
      }
    default:
      return state
  }
}

export default combineReducers({
  root: createReducer({
    defaultState: defaultState,
    onStart: 'app_on_starting',
    onSuccess: 'app_start_success',
    onError: 'app_start_error'
  }),
  admin: createReducer({defaultState}),
  cat: createReducer({defaultState}),
  dog: createReducer({defaultState})
})
