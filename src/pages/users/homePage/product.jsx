import React from "react";
import {convertIntToVND} from "../../../utils/util";
import { IoEyeOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";

function Product(prop) {
    return (
        <div className="div-product">
            <img className="img-product" src={prop.url} alt="img"/>
            <div className="div-eye-cart">
                <div className="div-icon"><IoEyeOutline /></div>
                <div className="div-icon"><BsCart2 /></div>
            </div>
            <span>{prop.name}</span>
            <span className="style-text">{convertIntToVND(prop.price)}</span>
        </div>
    )
}

export default Product;