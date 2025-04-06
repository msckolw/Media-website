import React from 'react';
import { ArticleProvider } from './context/ArticleContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import NewsGrid from './components/NewsGrid';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ArticleProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <Features />
          <NewsGrid />
        </main>
        <Footer />
      </div>
    </ArticleProvider>
  );
}

export default App; 