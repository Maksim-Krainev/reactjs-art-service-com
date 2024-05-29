import React from 'react';
import "./style.css";


const ArticleList = ({ articles }) => {
  return (
    <div className='article'>
      {articles.map((article, index) => (
        <article key={index} className="article-wrapper">
          <img src={article.imgSrc} alt={article.title} className="article-image" />
          <h2 className="article-title">{article.title}</h2>
          <p className="article-category categories" data-category={article.category}></p>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
