import React from "react";
import Carousel from 'react-grid-carousel';
import "./style_homepage.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Product from "../../common/product";
import { SanPhamSlides, Categorys , SanPhams, Posts } from "../../../utils/const";
import Post from "../../common/post";

function HomePage() {
    return (
       <div className="main">
            {/* slide */}
            <div className="div-slide-main">
                <div className="div-slide">
                    <div class="line"></div>
                    <span style={{color: "#1c5b41", fontSize: 30, fontWeight: "bold"}}>SẢN PHẨM HOT</span>
                    <Carousel cols={4} rows={1} gap={10} loop>
                        {SanPhamSlides.map((sp, key_sp) => (
                            <Carousel.Item key={key_sp}>
                            <div className="div-sp-item" style={{backgroundImage: `url(${sp.url})`}}>
                                <span className="sp-name-sp">{sp.name}</span>
                            </div>
                        </Carousel.Item>
                        ))}                           
                    </Carousel>
                </div>
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
                            {Categorys.map((title, key_title) => (
                                <Tab key={key_title}>{title.name}</Tab>
                            ))}
                        </TabList>
                        
                        <div>
                        {Categorys.map((title2, key_title2) => (
                            <TabPanel key={key_title2}>
                            {                           
                                SanPhams.map((product, product_key)=> (
                                    (title2.id === product.id_title && product.isHot === true) && (
                                        <Product key={product_key} url={product.url} name={product.name} price={product.price}></Product>
                                    )
                            ))}
                        </TabPanel>
                        ))}
                        </div>               
                    </Tabs>
                </div>
            </div>
            {/* Bài viết */}
            <div className="div-post">
                <div className="title-sp-hot">
                    <span>Bài viết</span>
                    <div className="div-space"></div>
                </div>
                <div className="post">
                    {Posts.slice(0, 2).map((post, key_post) => (
                        <Post key={key_post} url={post.url} title={post.title} content={post.content}></Post>
                    ))}
                </div>
            </div>
       </div>
    )
}

export default HomePage;