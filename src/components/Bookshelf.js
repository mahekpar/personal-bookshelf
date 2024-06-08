import React from 'react';
import './styles.css';

const Bookshelf = ({ bookshelf, onRemoveFromBookshelf }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Bookshelf</h1>
      {bookshelf.length === 0 ? (
        <p>No books in your bookshelf.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bookshelf.map((book, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <img src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg` : "https://via.placeholder.com/150"} alt={book.title} className="book-cover w-full" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2" style={{ textAlign: 'center' }}>{book.title}</div>
                <p className="text-gray-700 text-base" style={{ textAlign: 'center' }}>
                  {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
                </p>
                <button
                  className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded remove-button"
                  style={{ display: 'block', margin: '0 auto' }}
                  onClick={() => onRemoveFromBookshelf(book)}
                >
                  Remove from Bookshelf
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookshelf;
