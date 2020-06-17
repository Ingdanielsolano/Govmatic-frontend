import { fork, all } from 'redux-saga/effects';

import grantListSaga from '../services/grantList/sagas';

export default function* rootSaga() {
    yield all([
        fork(grantListSaga)
    ]);
}