import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin, CiUser } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";
import { convertIntToVND } from "../../utils/util";
import { RiMailSendLine } from "react-icons/ri";

function Header() {
    return(
        <div className="header">
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
    )
}

export default Header;