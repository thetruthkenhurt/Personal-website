import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-blue-900">About Me</h2>
      <p className="text-gray-700 mt-4">
        Welcome! I’m Kenneth, a passionate tech enthusiast based in Singapore, specializing in the ethical development of AI and machine learning technologies. I recently graduated with a Bachelor of Computer Science (Big Data) from SIM-University of Wollongong in September 2024. My academic journey is complemented by extensive hands-on experience across diverse tech domains, including Network Infrastructure and Cybersecurity.
      </p>
      <p className="text-gray-700 mt-4">
        I am actively seeking opportunities in the fields of AI and Machine Learning, eager to apply my robust skill set to innovative projects. My expertise spans advanced programming languages, data analytics, machine learning pipeline development, and a comprehensive understanding of cybersecurity best practices. I have developed and deployed machine learning models, leveraged big data technologies to derive actionable insights, and implemented plus upgraded secure network solutions that safeguard critical information in the healthcare sector.
      </p>
      <p className="text-gray-700 mt-4">
        In the dynamic intersection of technology and social impact, I aim to contribute meaningfully by harnessing data science and AI to create solutions that address real-world challenges. My experience in collaborative environments has honed my ability to work effectively within teams to meet and exceed organizational goals. I am committed to fostering a better tomorrow through the responsible and impactful application of technology. Please check out my LinkedIn profile(link at top of site) for my detailed work experience and to discuss potential job opportunities.
      </p>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-blue-800">Key Skills</h3>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li><strong>Programming Languages:</strong> Python, R, Java, SQL</li>
          <li><strong>Data Analytics:</strong> Big Data Technologies (Hadoop, Spark), Data Visualization (Tableau, Power BI)</li>
          <li><strong>Machine Learning:</strong> Model Development, Pipeline Automation, TensorFlow, PyTorch</li>
          <li><strong>Cybersecurity:</strong> Network Security, Threat Assessment, Ethical Hacking</li>
          <li><strong>Tools & Platforms:</strong> Git, Vercel, Google Colab</li>
          <li><strong>Soft Skills:</strong> Problem-Solving, Team Collaboration, Effective Communication, Project Management</li>
        </ul>
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-blue-800">Certifications</h3>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>CompTIA Security+</li>
          <li>Certified Ethical Hacker (CEH)</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;

