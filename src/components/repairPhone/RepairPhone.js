import React, { useState } from "react";
import imgSamsung from "./../../img/png/pngwing.com (1).png";
import imgApl from "./../../img/png/pngwing.com (2).png";
import imgXiomi from "./../../img/png/pngwing.com (3).png";
import imgHuavei from "./../../img/png/pngwing.com (4).png";
import imgLg from "./../../img/png/pngwing.com (5).png";
import imgLenovo from "./../../img/png/pngwing.com (6).png";
import imgMotorola from "./../../img/png/pngwing.com (7).png";
import imgOppo from "./../../img/png/pngwing.com (8).png";
import imgNokia from "./../../img/png/pngwing.com (9).png";
import imgZTE from "./../../img/png/pngwing.com (10).png";
import imgHonor from "./../../img/png/pngwing.com (11).png";
import imgRealmi from "./../../img/png/partner_realme-131x66.png";
import imgPixel from "./../../img/png/pngwing.com (13).png";
import imgDell from "./../../img/png/pngwing.com (21).png";
import imgAcer from "./../../img/png/partner_acer-131x66.png";
import imgAsus from "./../../img/png/partner_asus-131x66.png";
import imgHtc from "./../../img/png/partner_htc-131x66.png";
import imgMicrosoft from "./../../img/png/partner_microsoft-131x66.png";
import imgMeizu from "./../../img/png/partner_meizu-131x66.png";
import imgOne from "./../../img/png/partner_oneplus-131x66.png";
import { useTranslation } from 'react-i18next';

import "./style.css";

const images = [
  imgSamsung, imgApl, imgXiomi, imgHuavei, imgLg, imgLenovo, imgMotorola, 
  imgOppo, imgNokia, imgZTE, imgHonor, imgRealmi, imgPixel, imgDell, 
  imgAcer, imgAsus, imgHtc, imgMicrosoft, imgMeizu, imgOne
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
