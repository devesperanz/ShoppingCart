import { combineReducers } from 'redux';
import carts from './cart';
import items from './items';
import item from './item';

const allReducers = combineReducers({
  carts,
  item,
  items,
});
export default allReducers;
