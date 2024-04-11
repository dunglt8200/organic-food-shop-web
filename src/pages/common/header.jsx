import React, { useState } from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin, CiUser } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";
import { convertIntToVND } from "../../utils/util";
import { RiMailSendLine } from "react-icons/ri";
import { BsCart } from "react-icons/bs";
import { ROUTERS } from "../../utils/router";
import { Link } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";

function Header() {
    const[menus, setMenu] = useState([
        {
            name: "TRANG CHỦ",
            path: ROUTERS.USER.HOME
        },
        {
            name: "CỬA HÀNG",
            path: ROUTERS.USER.CUAHANG
        },
        {
            name: "SẢN PHẨM",
            path: ROUTERS.USER.SANPHAM,
            child: [
                {
                    name: "Rau củ",
                    path: ""
                },
                {
                    name: "Hoa quả",
                    path: ""
                },
                {
                    name: "Đóng hộp",
                    path: ""
                }
            ]
        },
        {
            name: "BÀI VIẾT",
            path: ROUTERS.USER.BAIVIET
        },
        {
            name: "LIÊN HỆ",
            path: ROUTERS.USER.LIENHE
        }
    ])

    const [isShowDropDown, setIsShowDropDown] = useState(false)
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
                    <span className="logo">TDL ORGANIC FOOD</span>
                </div>
                <div className="header-bottom-item-center">
                    <ul className="ul-header-item-menu">
                       {menus.map((menu, key)=> (
                        <li className="li-header-item" key={key}>
                             <Link className="link-menu" to={menu.path}>{menu.name}</Link>
                             {menu?.child?.length && (
                                <ul className="ul-dropdown-list">
                                    {menu.child.map((child, keyChild) => (
                                        <li className="li-header-item" key={keyChild}>
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
                        <li className="li-header-item">
                            <span>{convertIntToVND(1001000)}</span>
                        </li>
                        <li className="li-header-item">
                        <BsCart />
                        </li>
                    </ul>
                </div>
            </div>
            {/* dropdown menu */}
            <div className="header-menu-banner">
                <div className="header-menu">
                    <button className="button-menu" onClick={handleButtonDropDownList}>
                        <FiAlignJustify />
                        Danh sách sản phẩm
                    </button>
                    {isShowDropDown && (
                        <ul className="ul-dropdown-menu">
                            <li className="li-footer-item">
                                <Link className="link-dropdown-menu" to="">Thịt tươi</Link>
                            </li>
                            <li className="li-footer-item">
                                <Link className="link-dropdown-menu" to="">Rau củ</Link>                     
                            </li>
                            <li className="li-footer-item">
                                <Link className="link-dropdown-menu" to="">Nước trái cây</Link>
                            </li>
                            <li className="li-footer-item">
                                <Link className="link-dropdown-menu" to="">Trái cây</Link>
                            </li>
                            <li className="li-footer-item">
                                <Link className="link-dropdown-menu" to="">Hải sản</Link>
                            </li>
                        </ul>
                    )} 
                </div>
                {/* header-banner */}
                <div className="header-banner">
                    <div className="header-search">
                        <div className="div-search">
                            <input className="input-search" type="text" placeholder="Bạn đang muốn tìm gì ?"/>
                            <button className="btn-search">Tìm kiếm</button>                          
                        </div>
                        <div className="div-phone">
                            <div className="phone">
                            <BsTelephone color="#3f6150"/>
                            </div>
                            <div className="div-hotro">
                                <span className="style-text">039.567.2456</span>
                                <span>Hỗ trợ 24/7</span>
                            </div>
                        </div>  
                    </div>             
                    <div className="img-banner"></div>
                </div>                          
            </div>
        </div>
    )
}

export default Header;