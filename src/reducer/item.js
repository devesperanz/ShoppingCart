import { SINGLE_ITEM } from '../action/types';

const itemsReducer = (state = {}, action) => {
  switch (action.type) {
    case SINGLE_ITEM:
      const item = action.payload;
      item.quantity = 1;
      item.totalPrice = item.price;
      return item;
    default:
      return state;
  }
};

export default itemsReducer;
