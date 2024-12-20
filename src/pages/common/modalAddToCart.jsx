import React from "react";
import Modal from "react-modal";
import { MdDownloadDone } from "react-icons/md";
import DataTable from 'react-data-table-component';
import { CustomStyleTables } from "../../utils/const";
import {convertIntToVND} from "../../utils/util";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from "../../redux/cartSlice";

function ModalAddToCart({ isOpen, onRequestClose }) {

    const dispatch = useDispatch();
    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
      };
    
    //   const handleUpdateQuantity = (id, quantity) => {
    //     dispatch(updateQuantity({ id, quantity }));
    //   };

    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        content: {
          top: '40%',
          left: '50%',
          right: '45%',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          padding: 0,
          backgroundColor: "#fff",
          border: "none"
        },
      };
    
      const columns = [
        {
            name: 'Thông tin sản phẩm',
            selector: row =>(
                <div style={{display: "flex", flexDirection:"row", alignItems: "center"}}>
                    <img style={{width: "40%", height: "40%"}} src={row.url} alt="" />
                    <div className="div-name-add-to-cart">
                        <span>{row.name}</span>
                        <button className="btn-del-add-to-cart" onClick={() => handleRemove(row.id)}>Xóa</button>
                    </div>      
                </div>
            ),
            width: '40%'
        },
        {
            name: 'Số lượng',
            selector: row => row.soLuong,
             width: '20%'
        },
        {
            name: 'Đơn giá',
            selector: row => (
                <span style={{color: "#fe9614", fontWeight: "bold", fontSize: 16}}>
                    {convertIntToVND(row.price)}
                </span> 
            ),
             width: '20%'
        },
        {
            name: 'Thành tiền',
            selector: row =>(
                <span style={{color: "#fe9614", fontWeight: "bold", fontSize: 16}}>
                    {convertIntToVND(row.price * row.soLuong)}
                </span> 
            ),
             width: '20%'
        },
    ];
    const data = useSelector(state => state.cart.items);
    const totalPrice = data.reduce((sum, item) => sum + (item.price * item.soLuong), 0);
    
    return (
        <Modal isOpen = {isOpen} onRequestClose = {onRequestClose} style={customStyles}>
            <div className="modal-add-to-cart-title">
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5, paddingLeft: 20 }}>
                        <MdDownloadDone style={{ width: 30, height: 30 }}/> Bạn đã thêm sản phẩm vào giỏ hàng
                    </span>
                    <button className="btn-x" onClick={onRequestClose}>X</button>
                </div>
            <div className="modal-add-to-cart-main">
                <span style={{ fontSize: 18, color: "#333333", paddingTop: 10 }}>Giỏ hàng của bạn hiện có {data.length} sản phẩm</span>
                <div className="div-table-scroll">
                    <DataTable
                        columns={columns}
                        data={data}
                        customStyles={CustomStyleTables}
                        noDataComponent={
                            <div className='div-empty-data'>                                
                                <span>Không có sản phẩm nào trong giỏ hàng của bạn</span>
                            </div>
                        }
                    />
                </div>
                <div className="div-money">
                   <div style={{ display:"flex", justifyContent: "space-between", width: "30%" }}>
                        <span>Tổng tiền</span>
                        <span style={{color: "#fe9614", fontWeight: "bold"}}>{convertIntToVND(totalPrice)}</span>
                   </div>
                    <button className="btn-thanh-toan">Thanh toán</button>
                </div>
                           
            </div>
        </Modal>
    )
}
export default ModalAddToCart;