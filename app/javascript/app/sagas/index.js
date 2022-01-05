import {all} from 'redux-saga/effects';
import application from './application';
import orders from './orders';

export default function * rootSaga() {
  yield all([
    application(),
    orders()
  ]);
}
