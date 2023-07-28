import { combineReducers } from 'redux';
import { INCREMENT_STEP, RESET_STEPS } from './actions';

const stepReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_STEP:
      return state + 1;
    case RESET_STEPS:
      return 0;
    default:
      return state;
  }
};

export default combineReducers({
  step: stepReducer,
});
