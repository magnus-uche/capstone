import react, { useState, useEffect, useContext, Fragment } from "react";
import { CategoryContext } from "../../context/category.context";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import {CategoryTitle, CategoryContainer} from './category.styles'

const Category = () => {
const { category } = useParams();
const { categoriesMap } = useContext( CategoryContext );
const [products, setProducts] =  useState(categoriesMap[category]);
useEffect(()=> {
setProducts(categoriesMap[category]);
}, [category, categoriesMap]);
return (
    <Fragment>
    <CategoryTitle>{category.toLocaleUpperCase()}</CategoryTitle>
    <CategoryContainer>
    {
        products && 
        products.map((product) => (
            <ProductCard key={product.id} product={product}/>
        ))
    }
    </CategoryContainer>
    </Fragment>
)
}

export default Category;