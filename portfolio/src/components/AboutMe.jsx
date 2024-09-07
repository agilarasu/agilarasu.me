import React from 'react';
import goat from '../assets/goat.jpeg';
function AboutMe({ primary = "white", secondary = "green-600", background = "black" }) {
  return (
    <section className={`container mx-auto w-full flex flex-col md:flex-row items-center justify-center px-4 py-16 bg-${background}`}>
      {/* Image on the left side for larger screens */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8"> 
        <div className="bg-gray-800 rounded-md shadow-lg overflow-hidden"> {/* Added a background and rounded corners to the image container */}
          <img src={goat} alt="Goat" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className={`w-full md:w-1/2 text-center md:text-left`}>
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-${secondary}`}>About Me</h2>
        <p className={`text-lg md:text-xl leading-relaxed text-${primary}`}>
          Hi, I'm John Doe, a passionate web developer with a love for creating beautiful and functional websites. 
          With over 5 years of experience in the industry, I've honed my skills in HTML, CSS, JavaScript, and various front-end frameworks like React.

          I'm driven by a desire to constantly learn and improve, and I enjoy tackling challenging projects that push the boundaries of what's 
          possible on the web. When I'm not coding, you can find me exploring the great outdoors, reading the latest tech blogs, or tinkering with new technologies.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;