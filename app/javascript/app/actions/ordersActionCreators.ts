import ACTIONS from '../constants/actions';
import {ReduxAction} from '../typings/redux';

export const fetchOrders = (): ReduxAction => ({
  type: ACTIONS.FETCH_ORDERS,
});

export const fetchOrdersSuccess = (orders: any[]): ReduxAction => ({
  type: ACTIONS.FETCH_ORDERS_SUCCESS,
  payload: {orders}
});

export const fetchOrdersFailed = (): ReduxAction => ({
  type: ACTIONS.FETCH_ORDERS_FAILED,
});
