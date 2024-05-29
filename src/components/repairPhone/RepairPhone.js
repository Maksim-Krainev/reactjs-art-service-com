import React from "react";
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

import "./style.css";

const images = [
  imgSamsung, imgApl, imgXiomi, imgHuavei, imgLg, imgLenovo, imgMotorola, 
  imgOppo, imgNokia, imgZTE, imgHonor, imgRealmi, imgPixel, imgDell, 
  imgAcer, imgAsus, imgHtc, imgMicrosoft, imgMeizu, imgOne
];

function RepairPhone() {
  return (
    <div className="repair-container">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`img-${index}`}  className="repair-image" />
      ))}
    </div>
  );
}


export default RepairPhone;
