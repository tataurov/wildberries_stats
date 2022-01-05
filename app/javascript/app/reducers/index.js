import application, {initialState as applicationState} from './application';
import orders, {initialOrdersState as ordersState} from './orders';
import {pendingTasksReducer} from 'react-redux-spinner';

export default {
  pendingTasks: pendingTasksReducer,
  applicationState: application,
  ordersState: orders,
};

export const initialStates = {
  applicationState,
  ordersState,
};
