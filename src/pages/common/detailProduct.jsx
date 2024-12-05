import React from "react";
import { useParams } from "react-router-dom";
import { SanPhams } from "../../utils/const";
import { convertIntToVND } from "../../utils/util";
import { FcShipped } from "react-icons/fc";
import { GiSewingMachine } from "react-icons/gi";

function DetailProduct () {
    const { id } = useParams();
    let product = SanPhams.find(item => item.id.toString() === id);
    return (
        <div className="div-detail-product-main">
            <div className="div-img-product">
                <img className="img-product-detail" src={product.url} alt="" />
            </div>
            <div className="div-info-product">
                <h1>{product.name}</h1>
                <span style={{ color:"#484848", fontSize: 19 }}>Mã sản phẩm: {product.id}</span>
                <div style={{display: "flex", flexDirection: "row", gap: 10, alignItems: "center"}}>
                    <h1 style={{ color:"#FF6563", fontWeight: "bold" }}>{convertIntToVND(product.price)}</h1>
                    <div className="div-sale">Sale</div>
                </div>
                <div className="div-ship">
                    <FcShipped style={{width: "10%", height: "100%", color: "#484848"}}/>
                    <div style={{display:"flex", flexDirection: "column"}}>
                        <span style={{fontWeight: "bold"}}>Miễn phí vận chuyển</span>
                        <span>Cho đơn hàng từ 499.000đ</span>
                    </div>
                </div>   
                <div className="div-ship">
                    <GiSewingMachine style={{width: "10%", height: "100%", color: "#484848"}}/>
                    <div style={{display:"flex", flexDirection: "column"}}>
                        <span style={{fontWeight: "bold"}}>Miễn phí đổi, sửa hàng</span>
                        <span>Đổi hàng trong 30 ngày kể từ ngày mua Hỗ trợ sửa đồ miễn phí</span>
                    </div>
                </div>                        
            </div>
        </div>
    )
}

export default DetailProduct;