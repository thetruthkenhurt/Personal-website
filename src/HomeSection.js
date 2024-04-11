import React from 'react';

const HomeSection = () => {
  return (
    <section id="home" className="p-8">
      <h2 className="text-3xl font-bold">Welcome to My Website!</h2>
      <p>This is the home section where I'll introduce myself briefly.</p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4"> {/* Flex container with gap and top margin */}
        <a 
          href="https://www.linkedin.com/in/kenneth-goh-ba7a77176/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          Connect with me on LinkedIn
        </a>
        <a 
          href="https://github.com/thetruthkenhurt" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
