import axios from '../axios';
import { ALL_ITEMS, SINGLE_ITEM } from './types';

export const getItems = () => {
  return async dispatch => {
    try {
      const res = await axios.get('/products');
      res &&
        res.data &&
        dispatch({
          type: ALL_ITEMS,
          payload: res.data,
        });
    } catch (err) {
      console.log(ALL_ITEMS, err);
    }
  };
};

export const getItem = id => {
  return async dispatch => {
    try {
      const res = await axios.get(`/products/${id}`);
      res &&
        res.data &&
        dispatch({
          type: SINGLE_ITEM,
          payload: res.data,
        });
    } catch (err) {
      console.log(SINGLE_ITEM, err);
    }
  };
};
