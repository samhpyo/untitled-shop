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
import { CheckoutContainer, CheckoutHeader, CheckoutBlock, Total } from './checkout.styles'

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext)
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <CheckoutBlock>
                    <span> PRODUCT </span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span> DESCRIPTION </span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span> QUANTITY </span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span> PRICE </span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span> REMOVE </span>
                </CheckoutBlock>
            </CheckoutHeader>
                {
                    cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
                }
               <Total>Total: ${cartTotal}</Total> 
        </CheckoutContainer>
    )
}

export default Checkout