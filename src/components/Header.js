import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <nav className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">Book Search</Link>
        <Link to="/bookshelf" className="text-xl">My Bookshelf</Link>
      </nav>
    </header>
  );
};

export default Header;
