import React from 'react';
import './styles.css';

const BookCard = ({ book, onAddToBookshelf }) => {
  const { title, author_name, cover_i } = book;
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img src={`https://covers.openlibrary.org/b/id/${cover_i}-S.jpg`} alt={title} className="book-cover w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2" style={{ textAlign: 'center' }}>{title}</div>
        <p className="text-gray-700 text-base" style={{ textAlign: 'center' }}>
          {author_name ? author_name.join(', ') : 'Unknown Author'}
        </p>
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded add-to-bookshelf-button"
          onClick={() => onAddToBookshelf(book)}
        >
          Add to Bookshelf
        </button>
      </div>
    </div>
  );
};

export default BookCard;
