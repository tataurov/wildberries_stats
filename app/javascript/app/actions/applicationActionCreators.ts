import ACTIONS from '../constants/actions';
import {ReduxAction} from '../typings/redux';

export const setCurrentRoute = (route: string): ReduxAction => ({
  type: ACTIONS.SET_CURRENT_ROUTE,
  payload: {route}
});

export const setRedirect = (path: string): ReduxAction => ({
  type: ACTIONS.SET_REDIRECT,
  payload: {path}
});

export const redirect = (path: string): ReduxAction => setRedirect(path);

export const resetRedirect = (): ReduxAction => ({
  type: ACTIONS.RESET_REDIRECT,
});

export const setOrdersUpdateInterval = (interval): ReduxAction => ({
  type: ACTIONS.SET_ORDER_UPDATE_INTERVAL,
  payload: {interval}
});

export const resetOrdersUpdateInterval = (): ReduxAction => ({
  type: ACTIONS.RESET_ORDER_UPDATE_INTERVAL,
});
