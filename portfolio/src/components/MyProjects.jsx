import React from 'react';

function MyProjects() {
  const projects = [
    {
      name: 'E-commerce Platform',
      image: '/images/projects/ecommerce.jpg', // Replace with your image path
      description: 'A fully-featured e-commerce platform built with React and Next.js.',
      link: 'https://example.com/ecommerce' // Replace with your project link
    },
    {
      name: 'Social Media App',
      image: '/images/projects/socialmedia.jpg', // Replace with your image path
      description: 'A modern social media app built with React, Firebase, and Material-UI.',
      link: 'https://example.com/socialmedia' // Replace with your project link
    },
    {
      name: 'Task Management App',
      image: '/images/projects/taskmanagement.jpg', // Replace with your image path
      description: 'A powerful task management app built with React, Redux, and Firebase.',
      link: 'https://example.com/taskmanagement' // Replace with your project link
    },
    {
      name: 'Personal Blog',
      image: '/images/projects/personalblog.jpg', // Replace with your image path
      description: 'A personal blog built with Next.js and Markdown.',
      link: 'https://example.com/personalblog' // Replace with your project link
    },
    // Add more projects here...
  ];

  return (
    <section className="container mx-auto w-full py-16">
      <div className="mb-8 text-center"> {/* Changed to center text */}
        <h2 className="text-3xl font-bold">My Projects</h2>
        <p className="text-gray-600">Check out some of the projects I've worked on. From web apps to mobile experiences, I've got a diverse portfolio.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Changed to 4 columns */}
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-900 rounded-lg overflow-hidden"> {/* Added dark background */}
            <a href={project.link} target="_blank" rel="noopener noreferrer"> 
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-48 object-cover hover:opacity-75 transition-opacity duration-300"  // Changed hover effect
              />
            </a>
            <div className="p-6"> {/* Added padding */}
              <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3> {/* Changed to white text */}
              <p className="text-gray-400">{project.description}</p> {/* Changed to lighter text */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyProjects;