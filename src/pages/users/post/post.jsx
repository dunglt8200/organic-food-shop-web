import React from "react";
import "./style_post.css";
import { Posts } from "../../../utils/const";
import PostItem from "../../common/post";
import { shortenText } from "../../../utils/util";
import { PaginatedList } from "react-paginated-list";

function Post() {
    return (
        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center" }}>
             <div className="post-main">
            {/* Tin nổi bậc */}
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
            <div className="div-post-main">
                <div className="div-title-post">
                    <span style={{fontWeight: "bold", fontSize: "xx-large"}}>Tin tức</span>
                    <span>(Có tất cả {Posts.length} bài viết)</span>
                </div>
                {/* Phân trang list*/}
                <div className="div-post-main-list">
                    <PaginatedList list={Posts} itemsPerPage={4}
                        renderList={(list) => (
                            <>
                              {list.map((post_item, post_item_key) => {
                                return (
                                    <PostItem url={post_item.url} title={post_item.title.toUpperCase()} content={shortenText(post_item.content, 150)}></PostItem>
                                );
                              })}
                            </>
                          )}
                    />
                </div>
            </div>
        </div>
        </div>      
    )
}

export default Post;