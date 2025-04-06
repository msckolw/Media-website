import React from 'react';
import { useArticles } from '../context/ArticleContext';
import NewsTile from './NewsTile';
import './NewsGrid.css';

const NewsGrid = () => {
  const { articles, loading, error } = useArticles();

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading articles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">Error: {error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="news-grid">
      {articles.map((article) => (
        <NewsTile
          key={article.id}
          title={article.title}
          description={article.description}
          imageUrl={article.imageUrl}
          date={article.publishedAt}
          category={article.category}
        />
      ))}
    </div>
  );
};

export default NewsGrid; 