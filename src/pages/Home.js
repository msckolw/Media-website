import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import './Home.css';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchArticles = async () => {
      try {
        // Mock data for now
        const mockArticles = [
          {
            id: 1,
            title: 'Breaking News: Major Development',
            description: 'A significant development has occurred in the tech industry...',
            category: 'Technology',
            date: new Date(),
            imageUrl: 'https://via.placeholder.com/300x200'
          },
          {
            id: 2,
            title: 'Global Economic Update',
            description: 'Latest updates on the global economic situation...',
            category: 'Business',
            date: new Date(),
            imageUrl: 'https://via.placeholder.com/300x200'
          },
          // Add more mock articles as needed
        ];
        setArticles(mockArticles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="home">
      <div className="hero">
        <h1>Latest News</h1>
        <p>Stay updated with the most recent developments</p>
      </div>
      <div className="articles-grid">
        {articles.map(article => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Home; 