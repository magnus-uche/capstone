import {
    CategoryPreviewContainer,
    Preview
} from "./category-preview.styles"
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";
const CategoryPreview = ({title, products}) => {

    return(
        <CategoryPreviewContainer>
        <h2 className="title">
        <Link to={title}>
        <span>{title.toUpperCase()}</span>
        </Link>
        </h2>
        <Preview>
        {
            products
            .filter((_, idx) => idx < 4)
            .map((product) => {
                return   (
                    <ProductCard key={product.id} product={product}/> 
                )
            }
        )
        }
        </Preview>
        </CategoryPreviewContainer>
    )

}

export default CategoryPreview;