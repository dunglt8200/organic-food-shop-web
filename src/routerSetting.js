import React from "react";
import { ROUTERS } from "./utils/router";
import HomePage from "./pages/users/homePage/homePage";
import {Routes, Route} from "react-router-dom";
import MasterLayout from "./pages/common/masterLayout";
import Store from "./pages/users/store/store";
import Post from "./pages/users/post/post";
import Contact from "./pages/users/contact/contact";
import DetailPost from "./pages/common/detailPost";
import DetailProduct from "./pages/common/detailProduct";

const renderCompoent = () => {
    const routerPages = [
       {
        path: ROUTERS.USER.HOME,
        compoent: <HomePage></HomePage>,
       },
       {
        path: ROUTERS.USER.CUAHANG,
        compoent: <Store></Store>,
       },
       {
        path: `${ROUTERS.USER.CUAHANG}/:id`,
        compoent: <DetailProduct></DetailProduct>,
       },
       {
        path: ROUTERS.USER.BAIVIET,
        compoent: <Post></Post>,
       },
       {
        path: `${ROUTERS.USER.BAIVIET}/:id`,
        compoent: <DetailPost></DetailPost>,
       },
       {
        path: ROUTERS.USER.LIENHE,
        compoent:<Contact></Contact>,
       },
    ];

   return(
    <MasterLayout>
        <Routes>
        { routerPages.map((x, key) => (
            (<Route key={key} path={x.path} element={x.compoent}></Route>)
        ))}
        </Routes>
    </MasterLayout>
   );
};

function RouterSetting(){
    return renderCompoent();
}

export default RouterSetting;