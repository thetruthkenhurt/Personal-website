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
                Utilizing NLP algorithms, Deep Purple AI aims to bridge communication gaps in digital interaction, offering nuanced insights with sentiment analysis.                
              </p>
			  <a href="https://github.com/thetruthkenhurt/DeepPurple_Ken" className="text-blue-500 hover:text-blue-800">View Repository</a>
            </div>
    

            {/* Repeat the structure for each project */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-700">Spam Mail Classification</h3>
              <p className="text-gray-700 mt-2">
                Classifying spam mails using machine learning models to enhance email filtering, with exploratory data analysis done in Jupyter Notebook.
              </p>
              <a href="https://github.com/thetruthkenhurt/Spam-mail-classification" className="text-blue-500 hover:text-blue-800">View Repository</a>
            </div>

            {/* Climate Research Project */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-700">Climate Research</h3>
              <p className="text-gray-700 mt-2">
                Analyzing trends in climate change in Singapore using Python and machine learning algorithms.
                This project aims to provide insights into climate patterns and contribute to environmental research.
              </p>
              <a href="https://github.com/thetruthkenhurt/climate-research" className="text-blue-500 hover:text-blue-800">View Repository</a>
            </div>

            {/* Runescape Automation Scripts Project */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-700">Runescape Automation Scripts</h3>
              <p className="text-gray-700 mt-2">
                Python Scripts for automating tasks in Old School Runescape (OSRS) for self-learning purposes.
                Exploring automation in gaming environments to enhance understanding of scripting and AI applications of computer vision using libraries like OpenCV.
              </p>
              <a href="https://github.com/thetruthkenhurt/runescape-automation-scripts" className="text-blue-500 hover:text-blue-800">View Repository</a>
            </div>
          </div>
        </section>
  );
};

export default ProjectsSection;
