import React from "react";
import "./style_homepage.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Product from "../../common/product";
import { SanPhamSlides, Categorys , SanPhams, Posts } from "../../../utils/const";
import PostHomePage from "../../common/postHomePage";
import { shortenText } from "../../../utils/util";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules';
import HotIcon from '../../../static/img/hot_16728370.png';
import { Link } from 'react-router-dom';
import { ROUTERS } from "../../../utils/router";

function HomePage() {
    return (
       <div className="main">
            {/* slide */}
            <div className="div-slide-main">
                <div className="div-slide">
                    <div className="line"></div>
                    <span className="span-category-homepage">SẢN PHẨM HOT</span>
                    <div className="reposive-swiper">
                        <Swiper
                            modules={[FreeMode]}
                            freeMode={true}
                            slidesPerView={4}
                            spaceBetween={1}
                        >
                            {SanPhamSlides.map((sp, key_sp) => (
                            <SwiperSlide key={key_sp}>
                                <div className="div-sp-item" style={{backgroundImage: `url(${sp.url})`}}>
                                    <span className="sp-name-sp">{sp.name}</span>                           
                                    <img src= {HotIcon} alt="" style={{ position: "absolute", top: 0, right: 0, width: "1", height: "1"}}/>
                                </div>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    </div>                    
                    <div>
                        <Link to={ROUTERS.USER.CUAHANG} style={{ width: "100%", display: "flex", justifyContent: "center", textDecoration: "none"}}>
                            <button className="btn-read-all">XEM TẤT CẢ</button>
                        </Link>           
                    </div>
                </div>               
            </div>     
            {/* sản phẩm nổi bật*/}
            <div className="div-sp-hot">
                {/* title */}
                <div className="div-sp-hot-main">
                    <div className="title-sp-hot">
                        <div className="line"></div>
                        <span className="span-category-homepage">SẢN PHẨM GIÁ TỐT</span>
                    </div>
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
                                        <Product {...product}></Product>
                                    )
                            ))}
                        </TabPanel>
                        ))}
                        </div>               
                    </Tabs>
                    <div>
                    <Link to={ROUTERS.USER.CUAHANG} style={{ width: "100%", display: "flex", justifyContent: "center", textDecoration: "none"}}>
                            <button className="btn-read-all">XEM TẤT CẢ</button>
                        </Link>  
                    </div>
                </div>
                </div>               
            </div>
            {/* Bài viết */}
            <div className="div-post">
                <div className="div-post-title">
                    <div className="line"></div>
                    <span className="span-category-tintuc">TIN TỨC SẢN PHẨM</span>
                </div>          
                <div className="post">
                    {Posts.slice(0, 3).map((post, key_post) => (
                        <PostHomePage key={key_post} url={post.url} title={post.title.toUpperCase()} content={shortenText(post.content, 150, true)} id={post.id}></PostHomePage>
                    ))}
                </div>
            </div>
       </div>
    )
}

export default HomePage;