import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import UiReducer from 'reducers/ui'
import AdminReducer from 'reducers/admin'
import CatReducer from 'reducers/cat'
import DogReducer from 'reducers/dog'

export default history =>
  combineReducers({
    router: connectRouter(history),
    ui: UiReducer,
    admin: AdminReducer,
    cat: CatReducer,
    dog: DogReducer
  })
