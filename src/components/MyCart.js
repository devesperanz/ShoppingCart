import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCarts, changeQuantity } from '../action/carts';

function MyCart() {
  const carts = useSelector(state => state.carts);
  const dispatch = useDispatch();

  const removeFromCart = id => dispatch(removeFromCarts(id));

  const increaseQuantity = (id, q) => dispatch(changeQuantity(q, id));
  const decreaseQuantity = (item, q) => {
    if (item.quantity > 1) dispatch(changeQuantity(q, item.id));
  };

  return (
    <div className='container my-cart'>
      <table className='table '>
        <thead>
          <tr>
            <th scope='col'></th>
            <th scope='col'>PRODUCT</th>
            <th scope='col'>PRICE</th>
            <th scope='col'>QUANTITY</th>
            <th scope='col'>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {carts.map(cart => (
            <tr className='table-row' key={cart.id}>
              <th scope='row'>
                <i
                  className='far fa-trash-alt'
                  onClick={() => removeFromCart(cart.id)}
                ></i>
              </th>
              <td className='product-image'>
                <img alt={cart.title} className='pic-1' src={cart.image} />
                <p>{cart.title}</p>
              </td>
              <td>${cart.price}</td>
              <td>
                <span className='btn-group'>
                  <button onClick={() => decreaseQuantity(cart, -1)}>
                    <i className='fas fa-minus icon'></i>
                  </button>
                  <span>{cart.quantity}</span>
                  <button onClick={() => increaseQuantity(cart.id, 1)}>
                    <i className='fas fa-plus icon'></i>
                  </button>
                </span>
              </td>
              <td>${cart.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {carts.length > 0 && (
        <>
          <div className='cart-total'>
            <h2>Cart Totals</h2>
            <table className='table table-hover'>
              <tbody>
                <tr>
                  <th scope='row'>Total</th>
                  <th>
                    $
                    {carts.length > 0 &&
                      carts
                        .reduce((a, b) => {
                          return a + b.totalPrice;
                        }, 0)
                        .toFixed(2)}
                  </th>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <Link to='/checkout'>
            <button type='button' className='btn btn-lg checkout'>
              Proceed to checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default MyCart;
