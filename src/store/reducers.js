import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import reducerGrantList from '../services/grantList/reducers'


const appReducer = (history) => combineReducers({
  router: connectRouter(history),
  grantList: reducerGrantList
})

const rootReducer = (history) => {
  return (state, action) => {
    return appReducer(history)(state, action);
  }
}
export default rootReducer