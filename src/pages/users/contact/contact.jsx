import React from "react";
import "./style.css";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";

function Contact() {
    return (
       <div className="lien-he">
            <div className="div-banner-lien-he">
                <span className="sp-text-lien-he">Liên hệ với chúng tôi</span>
            </div>
            <div className="lien-he-content">
                <div className="lien-he-address">
                    <div className="div-address-icon-text">
                        <div className="address-icon-text">
                            <div className="div-icon-lien-he"><SlLocationPin /></div>
                            <span>298 Dương Quảng Hàm, p.15, Gò Vấp, HCM</span>
                        </div>
                        <div className="address-icon-text">
                            <div className="div-icon-lien-he"><MdOutlinePhoneIphone /></div>
                            <span>0393903939</span>
                        </div>
                        <div className="address-icon-text">
                            <div className="div-icon-lien-he"><MdOutlineMailOutline /></div>
                            <span>organic-food@gmail.com</span>
                        </div>
                    </div>
                    <div className="div-line"></div>
                    <div className="div-input-mail">
                        <span style={{fontSize: 22, fontWeight: "bold"}}>Hãy gửi cho chúng tôi</span>
                        <input className="input-text" type="text" placeholder="Họ và tên" style={{height:40}}/>
                        <input className="input-text" type="text" placeholder="Email" style={{height:40}}/>
                        <button className="btn-send-lien-he">Gửi liên hệ</button></div>    
                    </div>
                <div className="div-map">
                    c
                </div>
            </div>
       </div>
    )
}

export default Contact;