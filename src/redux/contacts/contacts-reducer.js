import { combineReducers } from 'redux';
import { ADD, DELETE, FILTER_CHANGE } from './contacts-types';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];

    case DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER_CHANGE:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
