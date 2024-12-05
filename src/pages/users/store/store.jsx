import { React, useState } from "react";
import { Categorys, SanPhams } from "../../../utils/const";
import "./style_store.css";
import Product from "../../common/product";
import { Link } from "react-router-dom";

function Store() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleMenuClick = (index) => {
        setActiveIndex(index);
        setCurrentPage(1);
    }

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    let sanPhamFilters = SanPhams.filter(item => item.id_title === activeIndex);
    const totalPages = Math.ceil(sanPhamFilters.length / itemsPerPage);
    const currentSanPhams = sanPhamFilters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
       <div className="main-store">
            <div className="category-menu">
                <div style={{ display: "flex", gap: 5, flexDirection: "column" }}>
                    <span style={{ fontSize: 20, fontWeight: "bold" }}>Danh mục sản phẩm</span>
                    <div style={{ width: "50%", height: 3, backgroundColor: "orange" }}></div>
                </div>                
                <ul className="ul-menu-category">
                    {Categorys.map((item_category) => (
                        <li className="li-menu-category">
                            <Link className={`link-menu-category ${item_category.id === activeIndex ? 'active':''}`}  onClick={() => handleMenuClick(item_category.id)}>{item_category.name}</Link>
                        </li>
                    ))}
                </ul>            
            </div>
            <div className="main-product">
                <div className="div-list-product">
                    {currentSanPhams.filter(item => item.id_title === activeIndex).map((sp_item) => (
                        <Product {...sp_item}></Product>
                    ))}                                  
                </div>
                <div className="pagination-controls">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        style={{ margin: "10px 5px", padding: "5px 10px", backgroundColor: currentPage === index + 1 ? "#fe9614" : "#f0f0f0",
                            color: currentPage === index + 1 ? "white" : "black", border: "none", borderRadius: "4px", cursor: "pointer",
                            }}>
                        {index + 1}
                    </button>
                    ))}
                </div>              
            </div>                 
       </div>
    )
}

export default Store;