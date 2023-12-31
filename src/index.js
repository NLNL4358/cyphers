import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/reset.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, HashRouter} from 'react-router-dom';

/* 재 렌더링시 스크롤 Top */
import ScrollToTop from './components/FunctionComponent/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> /* 얘가있으면 2번실행되더라 */
    <HashRouter>
      <ScrollToTop/>
      <App />
    </HashRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
