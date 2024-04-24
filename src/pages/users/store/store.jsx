import React from "react";
import { Categorys, SanPhams } from "../../../utils/const";
import "./style_store.css";
import Product from "../../common/product";

function Store() {
    return (
       <div className="main-store">
            { Categorys.map((item_category, key_category) => (
                <div className="div-category-store">
                    <div className="div-title-category-store">
                        <span>{item_category.name}</span>
                        <div className="div-line-title-category-store"></div>
                    </div>
                    <div className="div-main-category-store">
                        {SanPhams.map((item_sp, key_sp) => (
                            (item_sp.id_title === item_category.id) &&(
                                <Product url={item_sp.url} name={item_sp.name} price={item_sp.price}></Product>
                            )
                        ))}
                    </div>
                </div>
            ))}
       </div>
    )
}

export default Store;