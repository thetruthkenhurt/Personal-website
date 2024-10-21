import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-blue-500 text-white">
      <h1 className="text-xl font-bold">Kenneth Goh</h1>
      <div>
        <a href="#home" className="px-4 hover:text-gray-200">Home</a>
        <a href="#about" className="px-4 hover:text-gray-200">About</a>
        <a href="#projects" className="px-4 hover:text-gray-200">Projects</a>
      </div>
    </nav>
  );
};

export default Navbar;
