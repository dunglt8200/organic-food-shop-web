import React, { useState } from "react";
import Carousel from 'react-grid-carousel';
import "./style.css";
import CamTuoi from "../../../static/slide/img/cam-sanh.jpg";
import RauCai from "../../../static/slide/img/rau-cai.jpg";
import CaRot from "../../../static/slide/img/ca-rot.jpg";
import Sua from "../../../static/slide/img/sua.jpg";
import HatKho from "../../../static/slide/img/hat-kho.jpg";
import CaChua from "../../../static/slide/img/Ca_chua.jpg";
import NuocEp from "../../../static/slide/img/nuoc-ep.jpg";
import KhoaiTay from "../../../static/slide/img/khoai-tay.jpg";

function HomePage() {
    const [products, setproducts] = useState([
        {
            name: "CAM TƯƠI",
            url: CamTuoi,
        },
        {
            name: "RAU CẢI",
            url: RauCai,
        },
        {
            name: "CÀ RỐT",
            url: CaRot,
        },
        {
            name: "SỮA",
            url: Sua,
        },
        {
            name: "HẠT KHÔ",
            url: HatKho,
        },
        {
            name: "CÀ CHUA",
            url: CaChua,
        },
        {
            name: "NƯỚC ÉP",
            url: NuocEp,
        },
        {
            name: "KHOAI TÂY",
            url: KhoaiTay,
        }
    ])

    return (
       <div className="main">
            {/* slide */}
            <div className="div-slide">
                <Carousel cols={4} rows={1} gap={10} loop>
                    {products.map((sp, key_sp) => (
                        <Carousel.Item>
                        <div className="div-sp-item" style={{backgroundImage: `url(${sp.url})`}}>
                            {sp.name}
                        </div>
                    </Carousel.Item>   
                    ))}                           
                </Carousel>
            </div>
       </div>
    )
}

export default HomePage;