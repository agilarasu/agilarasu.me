import React from 'react';
import { FaGithub, FaLinkedinIn, FaHackerrank, FaTwitter } from 'react-icons/fa';

function ConnectWithMe() {
  return (
    <section className="container mx-auto w-full py-16 bg-gray-900 text-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Connect with Me</h2>
        <p className="text-gray-400 mb-8">Find me on these platforms and let's connect!</p>
      </div>

      <div className="flex flex-wrap justify-center items-center space-x-8">
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
          <span className="sr-only">GitHub</span>
          <FaGithub className="text-3xl" />
          <p className="text-sm mt-1">GitHub</p>
        </a>
        <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
          <span className="sr-only">LinkedIn</span>
          <FaLinkedinIn className="text-3xl" />
          <p className="text-sm mt-1">LinkedIn</p>
        </a>
        <a href="https://hackerrank.com/your-hackerrank-profile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
          <span className="sr-only">HackerRank</span>
          <FaHackerrank className="text-3xl" />
          <p className="text-sm mt-1">HackerRank</p>
        </a>
        <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
          <span className="sr-only">Twitter</span>
          <FaTwitter className="text-3xl" />
          <p className="text-sm mt-1">Twitter</p>
        </a>
      </div>
    </section>
  );
}

export default ConnectWithMe;