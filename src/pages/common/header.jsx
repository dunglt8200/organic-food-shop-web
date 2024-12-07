import React, { useState, useEffect } from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin, CiUser } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";
import { convertIntToVND } from "../../utils/util";
import { RiMailSendLine } from "react-icons/ri";
import { BsCart } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { BsTelephone } from "react-icons/bs";
import "../../utils/const";
import { Menus } from "../../utils/const";
import { PiMagnifyingGlass } from "react-icons/pi";
import SlideImg from "../common/slideImg";
import { useLocation } from 'react-router-dom';
import { ROUTERS } from '../../utils/router';
import { useSelector } from 'react-redux';
import ModalAddToCart from "../common/modalAddToCart";

function Header() {
    const images = [
        'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1482101/pexels-photo-1482101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
    const location = useLocation();
    const [isOpen, setOpenModel] = React.useState(false)
    function openModal() {
        setOpenModel(true)
    }
    function closeModal() {
        setOpenModel(false)
    }
    useEffect(() => {
        const pathToIndex = {
            [`/${ROUTERS.USER.HOME}`]: 0,
            [`/${ROUTERS.USER.CUAHANG}`]: 1,
            [`/${ROUTERS.USER.BAIVIET}`]: 2,
            [`/${ROUTERS.USER.LIENHE}`]: 3,
        };

        const currentPath = location.pathname;
        if (pathToIndex[currentPath] !== undefined) {
            handleMenuClick(pathToIndex[currentPath]);
        } else if (currentPath.startsWith(`/${ROUTERS.USER.BAIVIET}/`)) {
            handleMenuClick(2);
        } else if (currentPath.startsWith(`/${ROUTERS.USER.CUAHANG}/`)) {
            handleMenuClick(1);
        }
    }, [location]);

    const [activeIndex, setActiveIndex] = useState(null);
    const handleMenuClick = (index) => {
        setActiveIndex(index);
    };
    const [inputTextSearch, setInputTextSearch] = useState("");
    const handleInputSearchChange = (e) => {
        setInputTextSearch(e.target.value);
      };

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
                        <li className= "li-header-item" key={key}>
                             <Link className={`link-menu ${activeIndex === key ? 'active' : ''}`} key={key} onClick={() => handleMenuClick(key)} to={menu.path}>{menu.name}</Link>
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
                <div className="header-bottom-item justify-content-right reposive-ip">
                    <ul className="ul-header-item">
                        <li className="li-header-item">
                        <BsCart className="reposive-cart" onClick={openModal} />
                            <div className="div-count-cart">{useSelector(state => state.cart.items).length}</div>
                            {isOpen && <ModalAddToCart isOpen={isOpen} onRequestClose={closeModal}></ModalAddToCart>}
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
                            <input className="input-search" onChange={handleInputSearchChange} type="text" placeholder="Bạn đang muốn tìm gì ?"/>
                            <button className={`btn-search${inputTextSearch ? "-active" : ""}`}>
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
                    <div className="div-slide-banner">
                        <div className="slide-banner">
                            <SlideImg images={images} />
                        </div> 
                    </div>
                </div>                          
            </div>
        </div>
    )
}

export default Header;