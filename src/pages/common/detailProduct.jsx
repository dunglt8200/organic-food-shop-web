import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SanPhams } from "../../utils/const";
import { convertIntToVND } from "../../utils/util";
import { FcShipped } from "react-icons/fc";
import { GiSewingMachine } from "react-icons/gi";
import Product from "../common/product";
import ModalAddProductCart from "../common/modalAddToCart";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/cartSlice";

function DetailProduct () {
    const { id } = useParams();
    let product = SanPhams.find(item => item.id.toString() === id);
    const [soluong, setSoLuong] = useState(1);
    const [isOpenModalAddCart, setIsOpenModalAddCart] = useState(false);

    const handleAddSL = () => {
        setSoLuong(soluong + 1)
    }
    const handleReduceSL = () => {
        if (soluong !== 1) {
            setSoLuong(soluong - 1);
        }      
    }
    const handleOpenModel = () => {
        setIsOpenModalAddCart(true)
    }
    const handleCloseModel = () => {
        setIsOpenModalAddCart(false)
    }
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        const productAddCart = {
            id: product.id,
            name: product.name,
            url: product.url,
            price: product.price,
            soLuong: soluong
        }
        dispatch(addToCart(productAddCart));
    };

    const handleClickAddProduct = () => {
        handleAddToCart()
        handleOpenModel()
    }

    useEffect(() => {
        setSoLuong(1);
    }, [id]);

    return (
        <div className="main-detail-product">
            {/* Tiêu đề */}
            <div className="div-title-detail-product">
               <span>Chi tiết sản phẩm</span>
            </div>
             {/* Chi tiết sản phẩm */}
            <div className="div-detail-product-main">
                <div className="div-img-product">
                    <img className="img-product-detail" src={product.url} alt="" />
                </div>
                <div className="div-info-product">
                    <h1>{product.name}</h1>
                    <span style={{ fontSize: 19 }}>Mã sản phẩm: {product.id}</span>
                    <div style={{display: "flex", flexDirection: "row", gap: 10, alignItems: "center"}}>
                        <h1 style={{ color:"#FF6563", fontWeight: "bold" }}>{convertIntToVND(product.price)}</h1>
                    <div className="div-sale">Sale</div>
                </div>
                <div className="div-ship">
                    <FcShipped style={{width: "10%", height: "100%"}}/>
                    <div style={{display:"flex", flexDirection: "column"}}>
                        <span style={{fontWeight: "bold"}}>Miễn phí vận chuyển</span>
                        <span>Cho đơn hàng từ 499.000đ</span>
                    </div>
                </div>   
                <div className="div-ship">
                    <GiSewingMachine style={{width: "10%", height: "100%"}}/>
                    <div style={{display:"flex", flexDirection: "column"}}>
                        <span style={{fontWeight: "bold"}}>Miễn phí đổi, sửa hàng</span>
                        <span>Đổi hàng trong 30 ngày kể từ ngày mua Hỗ trợ sửa đồ miễn phí</span>
                    </div>
                </div>
                <div>
                    <span style={{fontSize:18}}>Số lượng</span>
                    <div style={{display:"flex", alignItems: "center"}}>
                        <button className="btn-add-sl" style={{borderTopLeftRadius: 10, borderBottomLeftRadius: 10}} onClick={handleReduceSL}>-</button>
                        <input className="input-sl" type="number" value={soluong}/>
                        <button className="btn-add-sl" style={{borderTopRightRadius: 10, borderBottomRightRadius: 10}} onClick={handleAddSL}>+</button>
                    </div>
                </div>  
                <div style={{display: "flex", flexDirection: "column", gap: 15}}>
                    <button className="btn-buy" style={{backgroundColor: "#1c5b41"}}>Mua ngay</button>
                    <button className="btn-buy" style={{backgroundColor: "white", color: "#1c5b41"}} onClick={handleClickAddProduct}>Thêm vào giỏ hàng</button>
                    {isOpenModalAddCart && <ModalAddProductCart isOpen={isOpenModalAddCart} onRequestClose={handleCloseModel} soLuong={soluong} {...product}></ModalAddProductCart>}
                </div>  
            </div>
            </div>
            {/* Sản phẩm cùng loạis */}
            <div className="div-product-same-kind">
                <h1>Sản phẩm cùng loại</h1>
                <div className="div-product-same-kind-list">
                    {SanPhams.filter(item => item.id_title === product.id_title).slice(0, 4)
                     .map((sp_item) => (
                        <Product {...sp_item}></Product>
                     ))}
                </div>
            </div>   
        </div>
    )
}

export default DetailProduct;
