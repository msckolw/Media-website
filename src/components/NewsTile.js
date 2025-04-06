import React from 'react';
import { Link } from 'react-router-dom';
import './NewsTile.css';

const NewsTile = ({ article }) => {
  return (
    <div className="news-tile">
      <div className="news-image">
        <img src={article.imageUrl} alt={article.title} />
      </div>
      <div className="news-content">
        <div className="news-text-content">
          <h2 className="news-title">{article.title}</h2>
          <p className="news-description">{article.description}</p>
        </div>
        <div className="news-meta">
          <span className="news-category">{article.category}</span>
          <span className="news-date">{new Date(article.publishedAt).toLocaleDateString()}</span>
          <Link to={`/article/${article.id}`} className="read-more">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default NewsTile; 