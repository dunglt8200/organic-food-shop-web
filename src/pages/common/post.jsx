import React from "react";
import { Link } from 'react-router-dom';

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
                    <span className="style-text sp-title-content-post">{prop.title}</span>
                </Link>   
                <span>{prop.content}</span>
           </div>
        </div>
    )
}

export default Post;