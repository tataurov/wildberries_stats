import ACTIONS from '../constants/actions';

export const initialState = {
  redirect: null,
  currentRoute: null,
  counties: [],
  ordersUpdateInterval: null,
};

const applicationReducer = function(state = initialState, action) {
  const actionHandlers = {
    [ACTIONS.SET_REDIRECT]() {
      return {
        ...state,
        redirect: action.payload
      };
    },

    [ACTIONS.SET_CURRENT_ROUTE]() {
      return {
        ...state,
        currentRoute: action.payload.route
      };
    },

    [ACTIONS.RESET_REDIRECT]() {
      return {
        ...state,
        redirect: null
      };
    },
  };

  if (action.type in actionHandlers) {
    return actionHandlers[action.type]();
  }

  return state;
};

export default applicationReducer;
