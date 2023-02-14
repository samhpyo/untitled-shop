/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */

import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown