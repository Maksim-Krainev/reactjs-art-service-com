import React from 'react';
import "./style.css";

const Carousel = ({items}) => {
  

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
