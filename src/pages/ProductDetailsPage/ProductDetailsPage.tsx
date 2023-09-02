import React from "react"
import { useParams } from "react-router-dom";
const ProductDetailsPage:React.FC=()=>{
    const { productId } = useParams();
return (<h1>ProductDetailsPage {productId}</h1>)
}

export default ProductDetailsPage