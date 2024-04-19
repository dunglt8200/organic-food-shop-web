import React from "react";

function Post(prop) {
    return (
        <div className="div-post-item">
            <div className="div-img-post-item">
                <img className="img-post-item" src={prop.url} alt="img" />
            </div>
           <div className="div-content-post">
                <span className="style-text">{prop.title}</span>
                <span>{prop.content}</span>
           </div>
        </div>
    )
}

export default Post;