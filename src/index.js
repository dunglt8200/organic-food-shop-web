import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterSetting from './routerSetting';
import {BrowserRouter} from 'react-router-dom';
import "./css/main.css";
import "./css/reposive/reposive.Ipad.css";
import "./css/reposive/reposive.Iphone.css";
import ScrollToTop from './pages/common/scrollToTop';
import { Provider } from 'react-redux';
import Store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <RouterSetting></RouterSetting>
    </BrowserRouter>
  </Provider>
);
