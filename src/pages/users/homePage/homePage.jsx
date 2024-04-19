import React from "react";
import Carousel from 'react-grid-carousel';
import "./style.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Product from "./product";
import { SanPhamSlides, TitleTabs, ProductTabs } from "../../../utils/const";

function HomePage() {
    return (
       <div className="main">
            {/* slide */}
            <div className="div-slide">
                <Carousel cols={4} rows={1} gap={10} loop>
                    {SanPhamSlides.map((sp, key_sp) => (
                        <Carousel.Item>
                        <div className="div-sp-item" style={{backgroundImage: `url(${sp.url})`}}>
                            <span className="sp-name-sp">{sp.name}</span>
                        </div>
                    </Carousel.Item>
                    ))}                           
                </Carousel>
            </div>
            {/* sản phẩm nổi bật*/}
            <div className="div-sp-hot">
                {/* title */}
                <div className="title-sp-hot">
                    <span>Sản Phẩm Nổi Bật</span>
                    <div className="div-space"></div>
                </div>
                {/* tab */}
                <div>
                    <Tabs>
                        <TabList>
                            {TitleTabs.map((title, key_title) => (
                                <Tab key={key_title}>{title.name}</Tab>
                            ))}
                        </TabList>
                        
                        <div>
                        {TitleTabs.map((title2, key_title2) => (
                            <TabPanel key={key_title2}>
                            {                           
                                ProductTabs.map((product, product_key)=> (
                                    (title2.id === 0 || title2.id === product.id_title) && (
                                        <Product url={product.url} name={product.name} price={product.price}></Product>
                                    )
                            ))}
                        </TabPanel>
                        ))}
                        </div>               
                    </Tabs>
                </div>
            </div>
       </div>
    )
}

export default HomePage;