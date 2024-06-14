import React, { useState } from "react";
// import imgSamsung from "./../../img/png/samsung-svgrepo-com.svg";
// import imgApl from "./../../img/png/apple-black-logo-svgrepo-com (1).svg";
// import imgXiomi from "./../../img/png/xiaomi-svgrepo-com.svg";
// import imgHuavei from "./../../img/png/huawei-svgrepo-com.svg";
// import imgLg from "./../../img/png/lg-svgrepo-com.svg";
// import imgLenovo from "./../../img/png/lenovo-svgrepo-com.svg";

// import imgNokia from "./../../img/png/nokia-svgrepo-com.svg";
// import imgDell from "./../../img/png/dell-2-logo-svgrepo-com.svg";
// import imgAcer from "./../../img/png/acer-svgrepo-com.svg";
// import imgAsus from "./../../img/png/asus-svgrepo-com.svg";

// import imgMicrosoft from "./../../img/png/microsoft-logo-svgrepo-com (1).svg";
// import imgOne from "./../../img/png/oneplus-svgrepo-com.svg";
import { useTranslation } from 'react-i18next';

import "./style.css";

import aplLogo from './../../img/logo-phone/aplleLogo.png';
import samsungLogo from './../../img/logo-phone/samsungLogo.png';
import xiomiLogo from './../../img/logo-phone/xiomiLogo.png';
import xuaveiLogo from './../../img/logo-phone/xuaveiLogo.png';
import lgLogo from './../../img/logo-phone/lgLogo.png';
import lenovoLogo from './../../img/logo-phone/lenovoLogo.png';
import nokiaLogo from './../../img/logo-phone/nokiaLogo.png';
import meizuLogo from './../../img/logo-phone/meizuLogo.png';
import dellLogo from './../../img/logo-phone/dellLogo.png';
import motorolaLogo from './../../img/logo-phone/motorolaLogo.png';
import pixelLogo from './../../img/logo-phone/pixelLogo.png';
import oneplusLogo from './../../img/logo-phone/omeplusLogo.png';
import microsoftLogo from './../../img/logo-phone/microsoftLogo.png';
import asusLogo from './../../img/logo-phone/asusLogo.png';
import acerLogo from './../../img/logo-phone/acerLogo.png';
import htcLogo from './../../img/logo-phone/htcLogo.png';


const images = [
  samsungLogo, aplLogo, xiomiLogo, xuaveiLogo,  
  lgLogo, lenovoLogo, nokiaLogo, meizuLogo, 
  dellLogo, motorolaLogo, pixelLogo, oneplusLogo,
  microsoftLogo, asusLogo, acerLogo, htcLogo
];

function RepairPhone() {
  const { t } = useTranslation();
  const [visibleImagesCount, setVisibleImagesCount] = useState(8);

  const handleShowAll = () => {
    setVisibleImagesCount(images.length);
  };

  const handleShowLess = () => {
    setVisibleImagesCount(8);
  };

  return (
    <div>
      <div className="repair-container">
        {images.slice(0, visibleImagesCount).map((image, index) => (
          <img key={index} src={image} alt={`img-${index}`} className="repair-image" />
        ))}
      </div>
      <div className="buttons-container">
        {visibleImagesCount < images.length && (
          <button className="show-more-button" onClick={handleShowAll}>
            {t('scroll_btn')}
          </button>
        )}
        {visibleImagesCount === images.length && (
          <button className="show-less-button" onClick={handleShowLess}>
            {t('scroll_btn_ex')}
          </button>
        )}
      </div>
    </div>
  );
}

export default RepairPhone;
