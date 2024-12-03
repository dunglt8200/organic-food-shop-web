import React from "react";
import {convertIntToVND} from "../../utils/util";
import { LiaShoppingBagSolid } from "react-icons/lia";
import MyModal from "../common/modalAddToCart";

function Product(prop) {
    const [isOpen, setOpenModel] = React.useState(false)
    function openModal() {
        setOpenModel(true)
    }
    function closeModal() {
        setOpenModel(false)
    }

    return (
        <div className="div-product">
            <div className="div-img-icon">
                <img className="img-product" src={prop.url} alt="img"/>
                <div className="div-eye-cart" onClick={openModal} >
                    <div className="div-icon"><LiaShoppingBagSolid /></div>
                    <span style={{ fontSize: 16 }}>Thêm vào giỏ hàng</span>                    
                </div>
                {isOpen && <MyModal isOpen = {isOpen} onRequestClose={closeModal} name={prop.name} price={prop.price}></MyModal>}
            </div>
            
            <div className="div-name-price-product">
                <span style={{ color: "#045541d5", fontWeight: "bold", fontSize: "large" }}>{prop.name}</span>
                <span style={{ color: "#fe9614", fontWeight: "bold", fontSize: "large" }}>{convertIntToVND(prop.price)}</span>
            </div>  
        </div>
    )
}

export default Product;