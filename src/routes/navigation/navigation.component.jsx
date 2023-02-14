/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext)

    return (
      <Fragment>
        <div className="navigation">
            <Link className='logo-container' to='/'>
                <CrwnLogo className='logo' />
            </Link>
          <div className='links-container'>
            <Link className='nav-link' to ='/shop'> SHOP </Link>
            {
              currentUser ? (
                <span className='nav-link' onClick={signOutUser}> SIGN OUT </span>
              ) : <Link className='nav-link' to ='/auth'> SIGN IN </Link>
            }
            <CartIcon/>
          </div>
        </div>
          {isCartOpen && <CartDropdown />}
        <Outlet />
      </Fragment>
    );
  };
  
  export default Navigation