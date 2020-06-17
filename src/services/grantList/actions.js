import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({

	getGrantList: [],
	getGrantListSuccess: ['grantList'],
	getGrantListFailed: ['error'],

	resetStates: []
})

export default Creators