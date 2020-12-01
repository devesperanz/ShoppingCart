import { ALL_ITEMS } from '../action/types';

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case ALL_ITEMS:
      const items = action.payload.map(item => {
        item.quantity = 1;
        item.totalPrice = item.price;
        return item;
      });
      return items;
    default:
      return state;
  }
};

export default itemsReducer;
