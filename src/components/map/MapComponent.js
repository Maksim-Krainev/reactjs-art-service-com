import React from 'react';
import './style.css';

const MapComponent = () => {
  return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d81285.99134449098!2d30.3795098!3d50.4562381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd3adfce95f5%3A0x407a50749aa1aa31!2z0KDQtdC80L7QvdGCINGC0LXQu9C10YTQvtC90ZbQsiwg0LrQvtC80L8n0Y7RgtC10YDRltCyLCDQvdC-0YPRgtCx0YPQutGW0LIsINC_0LvQsNC90YjQtdGC0ZbQsiAtINCh0LXRgNCy0ZbRgdC90LjQuSDRhtC10L3RgtGAIEFydCBTZXJ2aWNl!5e0!3m2!1sru!2sua!4v1716897824522!5m2!1sru!2sua"
        className="map-iframe"
        allowFullScreen=""
        title="Google Map"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
  );
};

export default MapComponent;
