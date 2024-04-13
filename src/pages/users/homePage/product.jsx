import React from "react";

function Product(prop) {
    return (
        <div className="div-product">
            <img src={prop.url} alt="img" />
            <span>{prop.name}</span>
            <span>{prop.price}</span>
        </div>
    )
}

export default Product;