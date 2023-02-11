/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import './navigation.styles.scss'

const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">
            <Link className='logo-container' to='/'>
                <CrwnLogo className='logo' />
            </Link>
          <div className='links-container'>
            <Link className='nav-link' to ='/shop'> SHOP </Link>
            <Link className='nav-link' to ='/sign-in'> SIGN IN </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };
  
  export default Navigation