import React from "react";
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";

function Post(prop) {
    return (
        <div className="div-post-item">
            <div className="div-img-post-item">
                <Link to="">
                    <img className="img-post-item" src={prop.url} alt="img" />
                </Link>
            </div>
           <div className="div-content-post">
                <Link style={{color: "black", textDecoration: "none"}} to="">
                    <span className="hover-post-title" style={{ color: "#fe9614", fontWeight: "bold" }}>{prop.title}</span>
                </Link>
                <span style={{ color: "#fff", fontSize: "small", fontStyle: "italic" }}>{prop.content}</span>
           </div>
           <div className="div-read-more">
                <Link style={{ color: "black", textDecoration: "none"}} to="">
                    <span>Xem thêm </span>                                  
                </Link>
                <IoIosArrowRoundForward style={{color: "#fe9614", width: 30, height: 30 }}/>               
           </div>         
        </div>
    )
}

export default Post;