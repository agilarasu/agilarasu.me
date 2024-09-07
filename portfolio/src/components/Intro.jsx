import React, { useState, useEffect, useRef } from 'react';
import goat from '../assets/goat.jpeg';

function Intro({ primary = "white", secondary = "green-600", background = "black", buttonColor = "green-600" }) {
  const [currentProfession, setCurrentProfession] = useState(0);
  const professions = ["Security Researcher", "Backend Developer"];
  const professionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfession((prevProfession) => (prevProfession + 1) % professions.length);
    }, 3000); // Change profession every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (professionRef.current) {
      professionRef.current.style.animation = 'slideDown 0.5s ease-in-out';
      setTimeout(() => {
        professionRef.current.style.animation = '';
      }, 500); // Reset animation after it completes
    }
  }, [currentProfession]);

  return (
    <section className={`container mx-auto w-full flex flex-col md:flex-row items-center justify-center min-h-screen px-4 bg-${background}`}>
      {/* Removed max-w-4xl to use full width */}
      <div className={`text-center md:text-left mb-8 md:mb-0 w-full md:w-1/2 text-${primary}`}> 
        <h1 className="text-3xl md:text-6xl font-bold mb-4">Hi 👋<br /> I'm <span className={`text-${secondary}`}>Your Name</span></h1>
        <p ref={professionRef} className="text-lg md:text-xl mb-6">{professions[currentProfession]}</p>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
          <button className={`bg-${buttonColor} px-6 py-3 rounded-full hover:bg-opacity-75 mb-2 md:mb-0 md:mr-4`}>Get in touch</button>
          <button className={`text-${secondary} px-6 py-3 rounded-full border border-opacity-50 hover:bg-opacity-50 hover:text-white`}>My CV</button>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <div className={`rounded-full bg-${buttonColor} w-48 h-48 md:w-96 md:h-96 mx-auto relative`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="border-2 border-gray-600 rounded-full p-4">
              <img src={goat} alt="pic" className="rounded-full w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;