import React, { useState, useEffect } from 'react';
import Bookshelf from '../components/Bookshelf';
import './styles.css';

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = localStorage.getItem('bookshelf');
    if (storedBookshelf) {
      setBookshelf(JSON.parse(storedBookshelf));
    }
  }, []);

  const removeFromBookshelf = (bookToRemove) => {
    const updatedBookshelf = bookshelf.filter(book => book.key !== bookToRemove.key);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return <Bookshelf bookshelf={bookshelf} onRemoveFromBookshelf={removeFromBookshelf} />;
};

export default BookshelfPage;
