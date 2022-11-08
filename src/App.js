import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './pages/BooksPage';
import Categories from './pages/CategoriesPage';
import Header from './components/Header';

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
