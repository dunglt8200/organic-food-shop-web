import React from "react";
import { FaPhoneVolume, FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";

function Footer() {
   return(
    <div className="footer">
      <div className="footer-item">
         <div className="div-footer">
            <ul className="ul-footer">
               <li className="li-footer-item">
                  <span style={{color: "#fe9614", fontSize: 30, fontWeight: "bold"}}>TD ORGANIC FOOD</span>
               </li>
               <li className="li-footer-item">    
                  <FaMapLocationDot style={{ color: "#fe9614", width: 35, height: 35 }}/>           
                  <span>Địa chỉ: 298 Dương Quảng Hàm, phường 15, Gò Vấp, Hồ Chí Minh</span>
               </li>
               <li className="li-footer-item">
                  <FaPhoneVolume style={{ color: "#fe9614", width: 20, height: 20 }}/>
                  <span>Phone: 0393903939</span>
               </li>
               <li className="li-footer-item">
                  <MdOutlineMarkEmailRead style={{ color: "#fe9614", width: 20, height: 20 }}/>
                  <span>Email: organic-food@gmail.com</span>
               </li>
            </ul>
         </div>
         <div className="div-footer">
               <ul className="ul-footer">
                  <li className="li-footer-item">
                     <span style={{ color: "white", fontWeight: "bold" }}>Cửa Hàng</span>
                  </li>
                  <li className="li-footer-item">
                     <span>Liên hệ</span>
                  </li>
                  <li className="li-footer-item">
                     <span>Thông tin về chúng tôi</span>
                  </li>
                  <li className="li-footer-item">
                  <span>Sản phẩm kinh doanh</span>
                  </li>
               </ul>
         </div>
         <div className="div-footer">
               <ul className="ul-footer">
                  <li className="li-footer-item">
                     <span>Thông tin tài khoản</span>
                  </li>
                  <li className="li-footer-item">
                     <span>Giỏ hàng</span>
                  </li>
                  <li className="li-footer-item">
                     <span>Thông tin ưa thích</span>
                  </li>
               </ul>
         </div>
         <div className="div-footer">
               <ul className="ul-footer">
                  <li className="li-footer-item style-text">
                     <span style={{ color: "white", fontWeight: "bold" }}>Khuyến mãi & ưu đãi</span>
                  </li>
                  <li className="li-footer-item">
                     <span>Đăng ký nhận thông tin tại đây.</span>
                  </li>
                  <li className="li-footer-item">
                     <input type="text" className="input" placeholder="Nhập email"/>
                     <button className="button">ĐĂNG KÝ</button>
                  </li>
               </ul>
         </div>
      </div> 
      <div className="footer-designBy">© Bản quyền thuộc về LTD Team | Cung cấp bởi LTD</div> 
    </div>
   )
}

export default Footer;