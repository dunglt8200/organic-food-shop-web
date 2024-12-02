import { React, useState } from "react";
import { Categorys, SanPhams } from "../../../utils/const";
import "./style_store.css";
import CategoryProduct from "../../common/categoryProduct";
import Product from "../../common/product";

function Store() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleMenuClick = (index) => {
        setActiveIndex(index);
        console.log(index)
    }

    return (
       <div className="main-store">
            {/* { Categorys.map((item_category, key_category) => (
                <CategoryProduct list_sanpham={SanPhams} id_category={item_category.id} name={item_category.name}></CategoryProduct>
            ))} */}

            <div className="category-menu">
                <div style={{ display: "flex", gap: 5, flexDirection: "column" }}>
                    <span style={{ fontSize: 20, fontWeight: "bold" }}>Danh mục sản phẩm</span>
                    <div style={{ width: "50%", height: 3, backgroundColor: "orange" }}></div>
                </div>                
                <ul className="ul-menu-category">
                    {Categorys.map((item_category) => (
                        <li className="li-menu-category" onClick={() => handleMenuClick(item_category.id)}>{item_category.name}</li>
                    ))}
                </ul>            
            </div>
            <div className="main-product">
                {SanPhams.filter(item => item.id_title == activeIndex).map((sp_item) => (
                    <Product url={sp_item.url} name={sp_item.name} price={sp_item.price}></Product>
                ))}                                    
            </div>
       </div>
    )
}

export default Store;