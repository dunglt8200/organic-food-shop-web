import React, { useEffect, useState } from "react";
import Product from "../common/product";

function CategoryProduct({list_sanpham, id_category, name}) {

    const list_sanpham_filter = list_sanpham.filter(i => i.id_title === id_category)
    const [products, setproducts] = useState([]);
    const [countClickXemThem, setCountClickXemThem] = useState(0);
    const [isShowButtonXemThem, setIsShowButtonXemThem] = useState(true);

    const handleSplit = () => {
        const size = 4;
        const newArray = [];
        const countClick = countClickXemThem + 1;

        for (let i = 0; i < list_sanpham_filter.length; i += size) {
            const chunk = list_sanpham_filter.slice(i, i + size);
            newArray.push(chunk);
        }
        setCountClickXemThem(countClickXemThem + 1); 
        if(countClick < newArray.length) {
            setproducts(products.concat(newArray[countClick]))
            if(countClick === newArray.length - 1) {
                setIsShowButtonXemThem(false)}
        }
    };

    useEffect(() => {
        const productShowFirsts = list_sanpham_filter.slice(0,4)
        setproducts(productShowFirsts)
    }, [])

    return (
        <div className="div-category-store">
            <div className="div-title-category-store">        
                <div className="div-line-title-category-store"></div>
                <span>{name}</span>
            </div>
            <div className="div-main-category-store">
                {products.map((item_sp, key_sp) => (
                            <Product url={item_sp.url} name={item_sp.name} price={item_sp.price}></Product>
                        ))}     
            </div>
            {isShowButtonXemThem && <button className="btn-xem-them" onClick={handleSplit}>Xem thêm</button>}         
        </div>
    )   
}

export default CategoryProduct;