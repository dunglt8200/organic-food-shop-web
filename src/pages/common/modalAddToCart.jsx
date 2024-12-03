import React from "react";
import Modal from "react-modal";
import { MdDownloadDone } from "react-icons/md";
import DataTable from 'react-data-table-component';
import { CustomStyleTables } from "../../utils/const";

function ModalAddToCart({ isOpen, onRequestClose, name, url, price }) {
    const customStyles = {
        content: {
          top: '30%',
          left: '50%',
          right: '45%',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          padding: 0,
          backgroundcolor: '#363636'
        },
      };
    
      const columns = [
        {
            name: 'Thông tin sản phẩm',
            selector: row => row.name,
        },
        {
            name: 'Số lượng',
            selector: row => 1,
        },
        {
            name: 'Đơn giá',
            selector: row => row.price,
        },
        {
            name: 'Thành tiền',
            selector: row => row.price * 1,
        },
    ];
    const data = [
        {
          name: name,
          price: price,
        }
   ]
   const totalPrice = data.reduce((sum, item) => sum + item.price, 0);
    return (
        <Modal isOpen = {isOpen} onRequestClose = {onRequestClose} style={customStyles}>
            <div className="modal-add-to-cart-title">
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5, paddingLeft: 20 }}>
                        <MdDownloadDone style={{ width: 30, height: 30 }}/> Bạn đã thêm sản phẩm vào giỏ hàng
                    </span>
                    <button className="btn-x" onClick={onRequestClose}>X</button>
                </div>
            <div className="modal-add-to-cart-main">
                <span style={{ fontSize: 18, color: "#333333", paddingTop: 10 }}>Giỏ hàng của bạn hiện có 1 sản phẩm</span>
                <div>
                    <DataTable
                        columns={columns}
                        data={data}
                        style={CustomStyleTables}
                    />
                </div>
                <div className="div-money">
                   <div style={{ display:"flex", justifyContent: "space-between", width: "30%" }}>
                        <span>Tổng tiền</span>
                        <span>{totalPrice}đ</span>
                   </div>
                    <button className="btn-thanh-toan">Thanh toán</button>
                </div>
                           
            </div>
        </Modal>
    )
}
export default ModalAddToCart;