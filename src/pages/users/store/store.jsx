import React from "react";
import { Categorys, SanPhams } from "../../../utils/const";
import "./style_store.css";
import CategoryProduct from "../../common/categoryProduct";

function Store() {
    return (
       <div className="main-store">
            { Categorys.map((item_category, key_category) => (
                <CategoryProduct list_sanpham={SanPhams} id_category={item_category.id} name={item_category.name}></CategoryProduct>
            ))}
       </div>
    )
}

export default Store;