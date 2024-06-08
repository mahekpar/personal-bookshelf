import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import './styles.css';

const SearchPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return <SearchBar onAddToBookshelf={addToBookshelf} />;
};

export default SearchPage;
