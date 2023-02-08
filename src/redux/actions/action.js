import { ActionTypes } from "./action-types";

export const setItem = (items) => {
  return {
    type: ActionTypes.SET_ITEMS,
    payload: items,
  };
};

export const setReservation = (items) => {
  return {
    type: ActionTypes.SET_RESERVATION,
    payload: items,
  };
};

export const selectedItem = (items) => {
  return {
    type: ActionTypes.SELECTED_ITEM,
    payload: items,
  };
}

export const removeSelectedItem = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_ITEM,
  };
}