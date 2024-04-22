import React from "react";
import "./style_post.css";
import { Posts } from "../../../utils/const";
import PostItem from "../../common/post";
import { shortenText } from "../../../utils/util";

function Post() {
    return (
        <div className="post-main">
            <div className="div-hot-post">
                <div className="div-title-hot-post">
                    <span>Tin nổi bật</span>
                </div>
                <div className="div-hot-post-list">
                    {Posts.slice(0,2).map((post_item, post_item_key)=> (
                        <PostItem url={post_item.url} title={post_item.title.toUpperCase()}></PostItem>
                    ))}
                </div>
            </div>
            <div className="div-post-main">
                <div className="div-title-post">
                    <span style={{fontWeight: "bold", fontSize: "xx-large"}}>Tin tức</span>
                    <span>(Có tất cả {Posts.length} bài viết)</span>
                </div>
                <div className="div-post-main-list">
                    {Posts.map((post_item, post_item_key)=> (
                        <PostItem url={post_item.url} title={post_item.title.toUpperCase()} content={shortenText(post_item.content, 150)}></PostItem>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Post;