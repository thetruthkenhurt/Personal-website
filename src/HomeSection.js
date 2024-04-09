import React from 'react';

const HomeSection = () => {
  return (
    <section id="home" className="p-8">
      <h2 className="text-3xl font-bold">Welcome to My Website!</h2>
      <p>This is the home section where I'll introduce myself briefly. </p>
      <a 
        href="https://www.linkedin.com/in/kenneth-goh-ba7a77176/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
      >
        Connect with me on LinkedIn
      </a>
    </section>
  );
};

export default HomeSection;
