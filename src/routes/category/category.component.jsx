import { useState, useEffect,Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import {CategoryTitle, CategoryContainer} from './category.styles'
import { useSelector } from "react-redux";
import { selectCategory } from "../../store/category/category.selector";

const Category = () => {
const { category } = useParams();
const categoriesMap = useSelector(selectCategory);
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