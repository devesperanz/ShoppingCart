import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCarts } from '../action/carts';
import { getItem } from '../action/items';

function View({ match: { params } }) {
  const item = useSelector(state => state.item);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getItem(parseInt(params.id)));
  });

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item]);

  const increaseQuantity = q => {
    setQuantity(quantity + q);
  };
  const decreaseQuantity = q => {
    if (quantity && quantity > 1) {
      setQuantity(quantity + q);
    }
  };

  const addToCart = item => {
    item.quantity = quantity;
    item.totalPrice = item.price * quantity;
    dispatch(addToCarts(item));
  };

  return (
    <>
      {item && (
        <div className='container content-view'>
          <div className='left'>
            <img alt={item.title} className='pic-1' src={item.image} />
          </div>
          <div className='right'>
            <div>
              <h1>{item.title}</h1>
              <p className='category'>{item.category}</p>
              <p className='prize'>${item.price}</p>
            </div>
            <div className='bottom'>
              <p>{item.description}</p>
              <span className='btn-group'>
                <button onClick={() => decreaseQuantity(-1)}>
                  <i className='fas fa-minus icon'></i>
                </button>
                <span>{quantity}</span>
                <button onClick={() => increaseQuantity(1)}>
                  <i className='fas fa-plus icon'></i>
                </button>
              </span>
              <button
                type='submit'
                className='add-cart'
                onClick={() => addToCart(item)}
              >
                Add to cart <i className='fas fa-shopping-cart'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default View;
