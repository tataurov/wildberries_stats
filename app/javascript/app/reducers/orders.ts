import ACTIONS from '../constants/actions';

const defaultPagination = {
  page: 1,
  per_page: 10
};

export const initialOrdersState = {
  orders: [],
};

const ordersReducer = function(state = initialOrdersState, action) {
  const actionHandlers = {
    [ACTIONS.FETCH_ORDERS_SUCCESS]() {
      return {
        ...state,
        orders: action.payload.orders
      };
    },

  };

  if (action.type in actionHandlers) {
    return actionHandlers[action.type]();
  }

  return state;
};

export default ordersReducer;
