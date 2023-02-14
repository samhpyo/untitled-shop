/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */

import { createContext, useState } from "react";

import PRODUCTS from '../shop-data.json'

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products};
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}