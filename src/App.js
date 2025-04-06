import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NewsGrid from './components/NewsGrid';
import FullArticle from './components/FullArticle';
import Footer from './components/Footer';
import Popup from './components/Popup';
import './App.css';

const mockArticles = [
  {
    id: 1,
    title: "Breaking News: Major Development",
    description: "A significant development has occurred in the political landscape...",
    category: "Politics",
    publishedAt: "2024-04-05T12:00:00Z",
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Election Results Announced",
    description: "The latest election results have been announced with surprising outcomes...",
    category: "Politics",
    publishedAt: "2024-04-05T11:30:00Z",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Sports Championship Results",
    description: "The championship finals concluded with an unexpected victory...",
    category: "Sports",
    publishedAt: "2024-04-05T11:30:00Z",
    imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=400&fit=crop"
  }
];

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<NewsGrid articles={mockArticles} />} />
          <Route path="/article/:id" element={<FullArticle articles={mockArticles} />} />
        </Routes>
      </main>
      <Footer />
      <Popup />
    </div>
  );
}

export default App; 