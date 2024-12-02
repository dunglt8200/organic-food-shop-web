import React from "react";
import {convertIntToVND} from "../../utils/util";
import { LiaShoppingBagSolid } from "react-icons/lia";

function Product(prop) {
    return (
        <div className="div-product">
            <div className="div-img-icon">
                <img className="img-product" src={prop.url} alt="img"/>
                <div className="div-eye-cart">
                    <div className="div-icon"><LiaShoppingBagSolid /></div>
                    <span style={{ fontSize: 16 }}>Thêm vào giỏ hàng</span>
                </div>
            </div>
            
            <div className="div-name-price-product">
                <span style={{ color: "#045541d5", fontWeight: "bold", fontSize: "large" }}>{prop.name}</span>
                <span style={{ color: "#fe9614", fontWeight: "bold", fontSize: "large" }}>{convertIntToVND(prop.price)}</span>
            </div>  
        </div>
    )
}

export default Product;