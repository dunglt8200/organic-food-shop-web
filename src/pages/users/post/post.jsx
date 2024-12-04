import "./style_post.css";
import { Posts } from "../../../utils/const";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { shortenText } from "../../../utils/util";
import { React, useState } from "react";
import HotPost from "../../common/hotPost";

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
            <HotPost></HotPost>
            {/* danh sách tin tức */}  
            <div className="div-post-main">
                <div className="div-title-post">
                    <span style={{fontWeight: "bold", fontSize: "xx-large"}}>Tin tức</span>
                    <span>(Có tất cả {Posts.length} bài viết)</span>
                </div>
                <div className="div-post-main-list">
                    {currentPosts.map((item) => (
                        <div className="grid-post-item">
                            <img style={{ width: 400, height: 200, borderRadius: 20 }} src={item.url} alt=""></img>
                            <span style={{ color: "black", fontWeight: "bold", fontSize: 15 }}>{item.title.toUpperCase()}</span> 
                            <span style={{ color: "#656565" }}>{shortenText(item.content, 100, false)}</span>
                            <div className="div-read-more">
                                <Link style={{ color: "black", textDecoration: "none"}} to={`${item.id}`}>
                                    <span>Xem thêm </span>                                  
                                </Link>
                                <IoIosArrowRoundForward style={{color: "#fe9614", width: 30, height: 30 }}/>               
                            </div>                                                          
                        </div>                            
                    ))}                                  
                </div>
                {/* Phân trang list*/}
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