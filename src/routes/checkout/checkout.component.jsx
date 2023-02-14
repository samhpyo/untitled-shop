/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import './checkout.styles.scss'

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext)
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span> PRODUCT </span>
                </div>
                <div className='header-block'>
                    <span> DESCRIPTION </span>
                </div>
                <div className='header-block'>
                    <span> QUANTITY </span>
                </div>
                <div className='header-block'>
                    <span> PRICE </span>
                </div>
                <div className='header-block'>
                    <span> REMOVE </span>
                </div>
            </div>
                {
                    cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
                }
               <span className='total'>Total: ${cartTotal}</span> 
        </div>
    )
}

export default Checkout