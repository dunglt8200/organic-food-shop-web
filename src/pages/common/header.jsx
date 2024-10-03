import React, { useState } from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin, CiUser } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";
import { convertIntToVND } from "../../utils/util";
import { RiMailSendLine } from "react-icons/ri";
import { BsCart } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import "../../utils/const";
import { Menus, Categorys } from "../../utils/const";
import { PiMagnifyingGlass } from "react-icons/pi";

function Header() {
    const [isShowDropDown, setIsShowDropDown] = useState(true)
    const handleButtonDropDownList = () => {
        setIsShowDropDown(!isShowDropDown)
    }

    return(
        <div>
            {/* header top */}
            <div className="header-top">
                <div className="header-item justify-content-left">
                    <ul className="ul-header-item">
                        <li className="li-header-item">
                            <RiMailSendLine />
                            <span>organic-food@gmail.com</span>
                        </li>
                        <li className="li-header-item">
                            <span>|</span>
                        </li>
                        <li className="li-header-item">
                            <span>Miễn ship đơn từ {convertIntToVND(200000)}</span>
                        </li>
                    </ul>
                </div>
                {/* icon social network */}
                <div className="header-item justify-content-right">
                    <ul className="ul-header-item">
                        <li className="li-header-item">
                            <AiOutlineFacebook />
                        </li>
                        <li className="li-header-item">
                            <FaInstagram />
                        </li>
                        <li className="li-header-item">
                            <CiLinkedin />
                        </li>
                        <li className="li-header-item">
                            <IoLogoTwitter />
                        </li>
                        <li className="li-header-item">
                            <CiUser />
                            <span>Đăng nhập</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* header bottom */}
            <div className="header-bottom">                
                <div className="header-bottom-item">
                    <span className="logo">TD ORGANIC FOOD</span>
                </div>
                <div className="header-bottom-item-center">
                    <ul className="ul-header-item-menu">
                       {Menus.map((menu, key)=> (
                        <li className="li-header-item" key={key}>
                             <Link className="link-menu" to={menu.path}>{menu.name}</Link>
                             {menu?.child?.length && (
                                <ul className="ul-dropdown-list">
                                    {menu.child.map((child, keyChild) => (
                                        <li className="li-header-item li-dropdown" key={keyChild}>
                                            <Link className="link-menu" to={child.path}>{child.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                             )}
                        </li>
                       ))}
                    </ul>
                </div>
                {/* cart */}
                <div className="header-bottom-item justify-content-right">
                    <ul className="ul-header-item">
                        {/* <li className="li-header-item">
                            <span>{convertIntToVND(1001000)}</span>
                        </li> */}
                        <li className="li-header-item">
                        <BsCart style={
                            {
                                color: "white",
                                width: 70,
                                height: 40
                            }
                            }/>
                        </li>
                    </ul>
                </div>
            </div>
            {/* dropdown menu */}
            <div className="header-menu-banner">
                {/* header-banner */}
                <div className="header-banner">
                    <div className="header-search">
                        <div className="div-search">
                            <input className="input-search" type="text" placeholder="Bạn đang muốn tìm gì ?"/>
                            <button className="btn-search">
                                <PiMagnifyingGlass style={{width: 30, height: 30}}/>
                            </button>                          
                        </div>
                        <div className="div-phone">
                            <div className="phone">
                            <BsTelephone color="#3f6150" style={
                                {
                                    width: 20,
                                    height: 20
                                }}/>
                            </div>
                            <div className="div-hotro">
                                <span className="style-text">Hotline: 039 567 2456</span>
                            </div>
                        </div>  
                    </div>             
                    <div className="img-banner">
                        <div className="div-banner">
                            <span className="sp-1">TRÁI CÂY TƯƠI</span>
                            <br />
                            <span className="sp-2">RAU QUẢ <br /> SẠCH 100%</span>
                            <br />
                            <span>Miễn phí giao hàng tận nơi</span>
                            <br />
                            <Link className="link-buy" to="">MUA NGAY</Link>
                        </div>
                    </div>
                </div>                          
            </div>
        </div>
    )
}

export default Header;