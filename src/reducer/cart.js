import {
  ADD_TO_CARTS,
  CHANGE_QUANTITY,
  REMOVE_ALL_CARTS,
  REMOVE_FROM_CARTS,
} from '../action/types';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CARTS:
      return [...state, action.payload];
    case REMOVE_FROM_CARTS:
      const carts = [...state];
      const newCarts = carts.filter(cart => cart.id !== action.payload);
      return newCarts;
    case CHANGE_QUANTITY:
      const copyCarts = [...state];
      const item = copyCarts.find(i => i.id === action.payload.id);
      item.quantity += action.payload.count;
      item.totalPrice = item.price * item.quantity;
      return copyCarts;
    case REMOVE_ALL_CARTS:
      return [];
    default:
      return state;
  }
};

export default cartReducer;
