import { combineReducers } from 'redux'
import { itemReducer, reservationReducer, selectedItemReducer } from './reducers';

export const rootReducers = combineReducers ({
  itemReducer,
  reservationReducer,
  selectedItemReducer,
});
