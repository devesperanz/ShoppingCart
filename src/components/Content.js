import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from '../action/items';
import { addToCarts } from '../action/carts';
function Content() {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, []);

  const addToCart = item => {
    dispatch(addToCarts(item));
  };

  return (
    <div className='product'>
      <div className='row'>
        {items.map(item => (
          <div className='col-lg-3 col-md-4 col-sm-6 col-12' key={item.id}>
            <div className='product-grid2'>
              <div className='product-image2'>
                <img alt={item.title} className='pic-1' src={item.image} />
                <ul className='social'>
                  <li>
                    <Link to={`/view/${item.id}`} data-tip='Quick View'>
                      <i className='fa fa-eye'></i>
                    </Link>
                  </li>

                  <li onClick={() => addToCart(item)}>
                    <a data-tip='Add to Cart'>
                      <i className='fa fa-shopping-cart'></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className='product-content'>
                <h3 className='title'>
                  <span>{item.title}</span>
                </h3>
                <span className='price'>{`$${item.price}`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Content;
