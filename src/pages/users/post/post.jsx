import React from "react";
import "./style_post.css";
import { Posts } from "../../../utils/const";
import PostItem from "../../common/post";
import { shortenText } from "../../../utils/util";
import { PaginatedList } from "react-paginated-list";

function Post() {
    return (
        <div className="post-main">
            {/* Tin nổi bậc */}
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
    )
}

export default Post;