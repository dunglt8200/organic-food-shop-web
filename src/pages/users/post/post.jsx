import "./style_post.css";
import { Posts } from "../../../utils/const";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { shortenText } from "../../../utils/util";
import { React, useState } from "react";

function Post() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const totalPages = Math.ceil(Posts.length / itemsPerPage);
    const currentPosts = Posts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

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
                    {currentPosts.map((item) => (
                        <div className="grid-post-item">
                            <img style={{ width: 400, height: 200, borderRadius: 20 }} src={item.url}></img>
                            <span style={{ color: "black", fontWeight: "bold", fontSize: 15 }}>{item.title.toUpperCase()}</span> 
                            <span style={{ color: "#656565" }}>{shortenText(item.content, 100, false)}</span>
                            <div className="div-read-more">
                                <Link style={{ color: "black", textDecoration: "none"}} to="">
                                    <span>Xem thêm </span>                                  
                                </Link>
                                <IoIosArrowRoundForward style={{color: "#fe9614", width: 30, height: 30 }}/>               
                            </div>                                                          
                        </div>                            
                    ))}                                  
                </div>
                <div className="pagination-controls">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            style={{
                                margin: "10px 5px",
                                padding: "5px 10px",
                                backgroundColor: currentPage === index + 1 ? "#fe9614" : "#f0f0f0",
                                color: currentPage === index + 1 ? "white" : "black",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
        </div>      
    )
}

export default Post;