import React from "react";
import "./style_contact.css";
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
                        <textarea placeholder="Nội dung"></textarea>
                        <button className="btn-send-lien-he">Gửi liên hệ</button></div>    

                    </div>
                <div className="div-map">
                    <p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!
                            1d3918.746311985123!2d106.68519917590623!3d10.83071595818821!2m3!1f0!2f0!3f0!3m2!
                            1i1024!2i768!4f13.1!3m3!1m2!1s0x317528f82c8b5185%3A0xd831de75ccfe2560!2zMjk4IMS
                            QLiBRdeG6o25nIEjDoG0sIFBoxrDhu51uZyA1LCBHw7IgVuG6pXAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!
                            5e0!3m2!1svi!2s!4v1713757526626!5m2!1svi!2s"
                            style={{width:"100%", height: "580px", border: "none"}}
                            id="" title="map">
                        </iframe>
                    </p>
                </div>
            </div>
       </div>
    )
}

export default Contact;