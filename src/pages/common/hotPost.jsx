import React from "react";
import { Posts } from "../../utils/const";

function HotPost() {
    return (
        <div className="div-hot-post">
            <span style={{ fontWeight: "bold", fontSize: 25 }}>TIN TỨC NỔI BẬT</span>
                <div className="div-hot-post-list">
                    {Posts.slice(0,2).map((post_item, post_item_key)=> (
                        <div key={post_item_key} className="div-hot-post-item">
                            <img style={{ width: "25%", height: "20%", borderRadius: 5 }} src={post_item.url} alt="" />
                            <span style={{ fontSize: 17, color: "#231f20" }}>{post_item.title}</span>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default HotPost;