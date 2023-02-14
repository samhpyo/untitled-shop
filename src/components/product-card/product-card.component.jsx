/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */

import './product-card.styles.scss'

import Button from '../button/button.component'

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;
    return (<div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted'>Add To Cart</Button>
    </div>
    )
}

export default ProductCard