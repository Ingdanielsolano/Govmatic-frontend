import { put, takeLatest, all } from 'redux-saga/effects';
import { Types as actions } from './actions';
import Api from '../../common/Api';

function* fetchGetGrantList() {
	const response = yield Api.get('grant/list', { page: 1 })

	console.log(response)
	if (response && response.status == 'SUCCESS')
		yield put({ type: actions.GET_GRANT_LIST_SUCCESS, items: response.payload });

}

function* ActionWatcher() {
	yield takeLatest(actions.GET_GRANT_LIST, fetchGetGrantList);
}

export default function* root() {
	yield all([ActionWatcher()]);
}