import { createReducer } from 'reduxsauce'
import { Types } from './actions'

export const INITIAL_STATE = {
  items: [],
  loading: false,
  message: undefined
}

const getGrantList = (states) => ({ ...states, loading: true })
const getGrantListSuccess = (states, { items }) => ({ ...states, loading: false, items })
const getGrantListFailed = (states, { error }) => ({ ...states, loading: false, error })

const resetStates = (states) => ({ ...INITIAL_STATE })

export default createReducer(INITIAL_STATE, {
  [Types.GET_GRANT_LIST]: getGrantList,
  [Types.GET_GRANT_LIST_SUCCESS]: getGrantListSuccess,
  [Types.GET_GRANT_LIST_FAILED]: getGrantListFailed,

  [Types.RESET_STATES]: resetStates
})