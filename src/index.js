import React from 'react';
import ReactDOM from 'react-dom/client';
import BaiTapThucHanhLayOut from './components/BaiTapThucHanhLayout/BaiTapThucHanhLayOut';
import Banner from './components/BaiTapThucHanhLayout/Banner';
import Footer from './components/BaiTapThucHanhLayout/Footer';
import Item from './components/BaiTapThucHanhLayout/Item';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <>
  <BaiTapThucHanhLayOut/>
  <Banner/>
  <Item/>
  <Footer/>

  </>
)

