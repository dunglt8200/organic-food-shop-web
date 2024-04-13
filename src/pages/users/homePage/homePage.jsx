import React from "react";
import Carousel from 'react-grid-carousel';
import "./style.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Product from "./product";
import { SanPhamSlides } from "../../../utils/const";

function HomePage() {
    return (
       <div className="main">
            {/* slide */}
            <div className="div-slide">
                <Carousel cols={4} rows={1} gap={10} loop>
                    {SanPhamSlides.map((sp, key_sp) => (
                        <Carousel.Item>
                        <div className="div-sp-item" style={{backgroundImage: `url(${sp.url})`}}>
                            {sp.name}
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
                        <Tab>Toàn bộ</Tab>
                        <Tab>Thit tươi</Tab>
                        <Tab>Trái cây</Tab>
                        <Tab>Thức ăn nhanh</Tab>
                    </TabList>

                    <TabPanel>
                    <h2>Any content 1</h2>
                    <Product url="" name="a" price="1"></Product>
                    </TabPanel>
                    <TabPanel>
                    <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
                </div>
            </div>
       </div>
    )
}

export default HomePage;