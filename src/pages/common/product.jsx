import React from "react";
import {convertIntToVND} from "../../utils/util";
import { LiaShoppingBagSolid } from "react-icons/lia";
import MyModal from "../common/modalAddToCart";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../utils/router";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/cartSlice";

function Product(prop) {
    const [isOpen, setOpenModel] = React.useState(false)
    function openModal() {
        setOpenModel(true)
    }
    function closeModal() {
        setOpenModel(false)
    }
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const product = {
            id: prop.id,
            name: prop.name,
            url: prop.url,
            price: prop.price,
            soLuong: 1
        }
        dispatch(addToCart(product));
    };

    return (
        <div className="div-product">
            <div className="div-img-icon">
                <Link to={`/${ROUTERS.USER.CUAHANG}/${prop.id}`}>
                    <img className="img-product" src={prop.url} alt="img"/>
                </Link>         
                <div className="div-eye-cart" onClick={openModal} >
                    <div className="div-icon"><LiaShoppingBagSolid /></div>
                    <span style={{ fontSize: 16 }} onClick={handleAddToCart}>Thêm vào giỏ hàng</span>                    
                </div>
                {isOpen && <MyModal isOpen={isOpen} onRequestClose={closeModal} soLuong={1} {...prop} />}
            </div>
            
            <div className="div-name-price-product">
                <span style={{ color: "#045541d5", fontWeight: "bold", fontSize: "large" }}>{prop.name}</span>
                <span style={{ color: "#fe9614", fontWeight: "bold", fontSize: "large" }}>{convertIntToVND(prop.price)}</span>
            </div>  
        </div>
    )
}

export default Product;