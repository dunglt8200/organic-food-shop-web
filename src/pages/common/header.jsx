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

    return(
        <div>
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
        </div>
    )
}

export default Header;