import React from 'react';

const ProjectsSection = () => {
    return (
        <section id="projects" className="p-8 bg-white">
          <h2 className="text-3xl font-bold text-blue-900">My Projects</h2>
          
          <div className="mt-8">
            {/* Project 1 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-700">Deep Purple AI</h3>
              <p className="text-gray-700 mt-2">
                An ambitious project to decipher the intricate web of human emotions behind textual communication.
                Utilizing NLP algorithms, Deep Purple AI aims to bridge the emotional gap in digital interaction, offering nuanced insights into sentiment analysis.                
              </p>
            </div>
    
            {/* Project 2 */}
            {/* Add descriptions for other projects as well */}
          </div>
        </section>
  );
};

export default ProjectsSection;
