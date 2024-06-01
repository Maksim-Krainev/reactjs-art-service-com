import React from 'react';
import "./style.css";


const Card = ({ imageUrl, title, body, author, date }) => {
  return (
    <div className="custom-card">
      <div className="custom-card-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <p className="custom-card-title">{title}</p>
      <p className="custom-card-body">{body}</p>
      <p className="custom-card-footer"><span className="custom-author-name">{author}</span> <span className="custom-date">{date}</span></p>
    </div>
  );
};

export default Card;