import React, { useState } from 'react';
import BookCard from './BookCard';
import './styles.css';

const SearchBar = ({ onAddToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.length > 2) {
      fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => response.json())
        .then(data => {
          const filteredBooks = data.docs.filter(book => {
            return book.author_name && book.author_name.length > 0 && book.cover_i;
          });
          setBooks(filteredBooks);
        });
    }
  };

  const handleAddToBookshelf = (book) => {
    onAddToBookshelf(book);
    setMessage(`${book.title} has been added to your bookshelf!`);
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Search for books..."
          className="w-full p-2 border border-gray-300 rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button 
          type="submit"
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </form>
      {message && <div className="mb-4 p-2 bg-green-500 text-white">{message}</div>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {books.map((book) => (
          <BookCard key={book.key} book={book} onAddToBookshelf={handleAddToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
