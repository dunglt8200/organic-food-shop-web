import React from "react";
import { ROUTERS } from "./utils/router";
import HomePage from "./pages/users/homePage/homePage";
import {Routes, Route} from "react-router-dom";
import MasterLayout from "./pages/common/masterLayout";
import Profile from"./pages/users/profile/profile";

const renderCompoent = () => {
    const routerPages = [
       {
        path: ROUTERS.USER.HOME,
        compoent: <HomePage></HomePage>,
       },
       {
        path: ROUTERS.USER.PROFILE,
        compoent: <Profile></Profile>,
       }
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