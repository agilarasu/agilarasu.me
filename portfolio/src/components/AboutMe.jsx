import React from "react";
import img from "@/assets/about.jpg";
export default function AboutMe() {
  return (
    <section className="w-full md:w-[90%] lg:w-[80%] mx-auto py-12 md:py-24 lg:py-32 flex items-center min-h-screen py-20">
      <div className="container grid items-center gap-8 px-4 md:px-6">
        <div className="space-y-4">
          <div className="prose container grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-[hsl(var(--accent))]">About Me</h2>
              <p className="text-lg/relaxed lg:text-xl/relaxed">
                I'm a <b className="text-[hsl(var(--primary))]">final year IT student</b> passionate about developing impactful technology solutions. 
                My expertise spans across <b className="text-[hsl(var(--primary))]">Artificial Intelligence, Web Development,</b> and <b className="text-[hsl(var(--primary))]">Cybersecurity</b>, 
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
