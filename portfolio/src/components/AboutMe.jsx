import React from "react";
import img from "@/assets/mu.jpeg";
export default function AboutMe() {
  return (
    <section className="w-full md:w-[90%] lg:w-[80%] mx-auto py-12 md:py-24 lg:py-32 flex items-center min-h-[70vh]">
      <div className="container grid items-center gap-8 px-4 md:px-6">
        <div className="space-y-4">
          <div className="prose container grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-blue-500">About Me</h2>
              <p className="text-lg/relaxed lg:text-xl/relaxed">
                I'm a <b>final year IT student</b> passionate about developing impactful technology solutions. 
                My expertise spans across <b>Artificial Intelligence, Web Development,</b> and <b>Cybersecurity</b>, 
                driven by an insatiable curiosity to explore emerging technologies.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 flex justify-center">
              <img 
                src={img} 
                alt="Profile image" 
                className="rounded-lg shadow-lg max-h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
