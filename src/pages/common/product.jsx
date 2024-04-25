import React from "react";
import {convertIntToVND} from "../../utils/util";
import { FaEye } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

function Product(prop) {
    return (
        <div className="div-product">
            <div className="div-img-icon">
                <img className="img-product" src={prop.url} alt="img"/>
                <div className="div-eye-cart">
                    <div className="div-icon"><FaEye /></div>
                    <div className="div-icon"><FaCartPlus /></div>
                </div>
            </div>
            
            <div className="div-name-price-product">
                <span>{prop.name}</span>
                <span className="style-text">{convertIntToVND(prop.price)}</span>
            </div>  
        </div>
    )
}

export default Product;