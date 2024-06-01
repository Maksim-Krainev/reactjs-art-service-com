import React, { useState } from "react";
import imgSamsung from "./../../img/png/samsung-svgrepo-com.svg";
import imgApl from "./../../img/png/apple-black-logo-svgrepo-com (1).svg";
import imgXiomi from "./../../img/png/xiaomi-svgrepo-com.svg";
import imgHuavei from "./../../img/png/huawei-svgrepo-com.svg";
import imgLg from "./../../img/png/lg-svgrepo-com.svg";
import imgLenovo from "./../../img/png/lenovo-svgrepo-com.svg";
// import imgMotorola from "./../../img/png/pngwing.com (7).png";
// import imgOppo from "./../../img/png/pngwing.com (8).png";
import imgNokia from "./../../img/png/nokia-svgrepo-com.svg";
// import imgZTE from "./../../img/png/pngwing.com (10).png";
// import imgHonor from "./../../img/png/pngwing.com (11).png";
// import imgRealmi from "./../../img/png/partner_realme-131x66.png";
// import imgPixel from "./../../img/png/pngwing.com (13).png";
import imgDell from "./../../img/png/dell-2-logo-svgrepo-com.svg";
import imgAcer from "./../../img/png/acer-svgrepo-com.svg";
import imgAsus from "./../../img/png/asus-svgrepo-com.svg";
// import imgHtc from "./../../img/png/partner_htc-131x66.png";
import imgMicrosoft from "./../../img/png/microsoft-logo-svgrepo-com (1).svg";
// import imgMeizu from "./../../img/png/partner_meizu-131x66.png";
import imgOne from "./../../img/png/oneplus-svgrepo-com.svg";
import { useTranslation } from 'react-i18next';

import "./style.css";

const images = [
  imgSamsung, imgApl, imgXiomi, imgHuavei, imgLg, imgLenovo, 
 imgNokia,  imgDell, 
  imgAcer, imgAsus, imgMicrosoft, imgOne
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
