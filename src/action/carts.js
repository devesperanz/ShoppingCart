import {
  ADD_TO_CARTS,
  REMOVE_ALL_CARTS,
  REMOVE_FROM_CARTS,
  CHANGE_QUANTITY,
  VIEW_CARTS,
} from './types';

export const addToCarts = data => {
  return {
    type: ADD_TO_CARTS,
    payload: data,
  };
};

export const removeFromCarts = id => {
  return {
    type: REMOVE_FROM_CARTS,
    payload: id,
  };
};

export const removeAllCarts = () => {
  return {
    type: REMOVE_ALL_CARTS,
    payload: [],
  };
};

export const changeQuantity = (count, id) => {
  return {
    type: CHANGE_QUANTITY,
    payload: {
      count,
      id,
    },
  };
};

export const viewCart = () => {
  return {
    type: VIEW_CARTS,
    payload: [],
  };
};
