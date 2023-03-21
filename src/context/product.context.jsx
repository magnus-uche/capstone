import React, { createContext, useState, useEffect } from 'react';
import ProductItem from '../../src/shop-data.json';

export const ProductContext = createContext({
    product: [],
});

const ProductsProvider = ({ children }) => {
    const [product, setProduct] = useState(ProductItem);
    const value = {product}

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductsProvider;