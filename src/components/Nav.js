import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Nav() {
  const carts = useSelector(state => state.carts);
  return (
    <div>
      <nav className='navbar navbar-light'>
        <div className='container'>
          <Link to='/' className=' header-logo'>
            BG MART
          </Link>

          <Link to='/mycart'>
            <li>My cart{carts.length > 0 ? `(${carts.length})` : ''}</li>
          </Link>
          {/* <form className='form-inline'>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
          </form> */}
        </div>
      </nav>
    </div>
  );
}

export default Nav;
