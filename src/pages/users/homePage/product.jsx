import React from "react";
import {convertIntToVND} from "../../../utils/util";

function Product(prop) {
    return (
        <div className="div-product">
            <img className="img-product" src={prop.url} alt="img"/>
            <span>{prop.name}</span>
            <span className="style-text">{convertIntToVND(prop.price)}</span>
        </div>
    )
}

export default Product;