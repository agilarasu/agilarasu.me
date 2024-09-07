import React from 'react';

function MySkills() {
  const skills = [
    {
      name: 'JavaScript',
      icon: 'js.svg', 
      description: 'Proficient in modern JavaScript, including ES6+ features and popular frameworks/libraries like React and Node.js.'
    },
    {
      name: 'UI/UX Design',
      icon: 'uiux.svg',
      description: 'Skilled in creating user-friendly and visually appealing interfaces using tools like Figma and Sketch.'
    },
    {
      name: 'Database Management',
      icon: 'database.svg',
      description: 'Experienced in designing and managing relational databases using SQL and NoSQL technologies like PostgreSQL and MongoDB.'
    },
    {
      name: 'Cloud Computing',
      icon: 'cloud.svg', 
      description: 'Knowledgeable in cloud-based infrastructure and services, including AWS, Azure, and Google Cloud Platform.'
    },
    {
      name: 'Version Control',
      icon: 'version-control.svg',
      description: 'Proficient in using Git for version control and collaborating with teams on software projects.'
    },
    {
      name: 'System Design',
      icon: 'system.svg', 
      description: 'Experienced in designing scalable and efficient software systems, including microservices and distributed architectures.'
    },
  ];

  return (
    <section className="container mx-auto w-full py-16">
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
      <p className="text-center text-gray-500 mb-12">Here are the key skills I have developed over the years.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center p-6 rounded-lg bg-gray-800 
                       transform hover:scale-105 transition-transform duration-200" // Added hover effect
          >
            <img
              src={`/images/skills/${skill.icon}`}
              alt={skill.name}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <p className="text-gray-400 text-center">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MySkills;