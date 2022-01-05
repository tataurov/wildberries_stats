import {call, put, takeEvery, select} from 'redux-saga/effects';
import * as ordersActions from '../actions/ordersActionCreators';
import ACTIONS from '../constants/actions';
import * as RequestTools from '../tools/request';

export const fetchOrdersRequest = (params) => RequestTools.ajax({url: '/orders', params});

export function * fetchOrders() {
  try {
    const response = yield call(fetchOrdersRequest, {dateFrom: '2021-03-25T21:00:00.000Z', flag: 0, key: 'NzBmYjFiY2EtZjI5MC00ODkxLThjZjAtNzIzNThkZWU2ZjU5'});
    yield put(ordersActions.fetchOrdersSuccess(response.data));
  } catch (e) {
    yield put(ordersActions.fetchOrdersFailed());
  }
}

function * ordersSaga() {
  yield takeEvery(ACTIONS.FETCH_ORDERS, fetchOrders);
}

export default ordersSaga;
