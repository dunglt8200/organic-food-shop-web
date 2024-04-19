import CamTuoi from "../static/slide/img/cam-sanh.jpg";
import RauCai from "../static/slide/img/rau-cai.jpg";
import CaRot from "../static/slide/img/ca-rot.jpg";
import Sua from "../static/slide/img/sua.jpg";
import HatKho from "../static/slide/img/hat-kho.jpg";
import CaChua from "../static/slide/img/Ca_chua.jpg";
import NuocEp from "../static/slide/img/nuoc-ep.jpg";
import KhoaiTay from "../static/slide/img/khoai-tay.jpg";
import ThitBo from "../static/tab/img/thit-bo.jpg";
import ThitGa from "../static/tab/img/thit-ga.jpg";
import ChuoiXanh from "../static/tab/img/chuoi.jpg";
import Man from "../static/tab/img/man.jpg";
import KhoaiTayChien from "../static/tab/img/khoai-tay-chien12212.jpg";
import TaoXanh from "../static/tab/img/tao_xanh.jpg";
import NhoTim from "../static/tab/img/Nho.jpg";
import Post1 from "../static/post/hv-gioi-thieu-1-1024x768.jpg";
import Post2 from "../static/post/hv-gioi-thieu-2-1024x768.jpg";
import { ROUTERS } from "./router";

export const SanPhamSlides = [
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
];

export const Menus = [
    {
        name: "TRANG CHỦ",
        path: ROUTERS.USER.HOME
    },
    {
        name: "CỬA HÀNG",
        path: ROUTERS.USER.CUAHANG
    },
    {
        name: "SẢN PHẨM",
        path: ROUTERS.USER.SANPHAM,
        child: [
            {
                name: "Rau củ",
                path: ""
            },
            {
                name: "Hoa quả",
                path: ""
            },
            {
                name: "Đóng hộp",
                path: ""
            }
        ]
    },
    {
        name: "BÀI VIẾT",
        path: ROUTERS.USER.BAIVIET
    },
    {
        name: "LIÊN HỆ",
        path: ROUTERS.USER.LIENHE
    }
];

export const TitleTabs = [
    {
        id: 0,
        name: "Tất cả"     
    },
    {
        id: 1,
        name: "Thit tươi"     
    },
    {
        id: 2,
        name: "Trái cây"     
    },
    {
        id: 3,
        name: "Thức ăn nhanh"   
    }
];

export const ProductTabs = [
    {
        name: "Thịt bò",
        price: 125000,
        id_title: 1,
        url: ThitBo
    },
    {
        name: "Thịt gà",
        price: 75000,
        id_title: 1,
        url: ThitGa
    },
    {
        name: "Chuối xanh",
        price: 30000,
        id_title: 2,
        url: ChuoiXanh
    },
    {
        name: "Mận an phước",
        price: 22000,
        id_title: 2,
        url: Man
    },
    {
        name: "Táo xanh",
        price: 80000,
        id_title: 2,
        url: TaoXanh
    },
    {
        name: "Nho tím",
        price: 85000,
        id_title: 2,
        url: NhoTim
    },
    {
        name: "Khoai tây chiên",
        price: 40000,
        id_title: 3,
        url: KhoaiTayChien
    }
];

export const Posts = [
    {
        url: Post1,
        title: "Thế nào là thực phẩm sạch?",
        content: "Theo các chuyên gia, thực phẩm sạch là thực phẩm trong quá trình nuôi trồng vẫn sử dụng chất hóa học như thuốc trừ sâu, hóa chất tổng hợp... Tuy nhiên, các hoá chất này đều được xử lý theo quy trình để đảm bảo thực phẩm khi thu hoạch chỉ còn dư lượng chất độc hại dưới mức cho phép, không ảnh hưởng tiêu cực cho sức khoẻ người dùng."
    },
    {
        url: Post2,
        title: "Và thực phẩm hữu cơ (organic) là gì?",
        content: "Theo quy định, các sản phẩm đạt tiêu chuẩn Organic sẽ được gắn nhãn “Certified Organic Foods” như sữa bột công thức Organic, bột dinh dưỡng cho bé Organic, thịt, trứng, rau và trái cây Organic. Chứng nhận này được gắn trên các sản phẩm không chứa hormone, không chứa thuốc trừ cỏ hay phân bón hóa học, không bị biến đổi gen, không bị chiếu xạ tiệt trùng, không có hương liệu, phẩm màu và chất bảo quản. Tất cả các thực phẩm Organic đều chịu sự kiểm soát liên tục, gắt gao từ khâu đầu đến khâu cuối cùng bởi các tổ chức có thẩm quyền và uy tín về lĩnh vực này."
    }
]