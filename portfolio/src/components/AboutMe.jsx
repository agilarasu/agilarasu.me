import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutMe() {
  return (
    <section className="w-[80%] mx-auto py-12 md:py-24 lg:py-32 bg-black">
      <h2 className="text-3xl font-bold text-center mb-8">About Me </h2>

      <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <div className="prose text-white text-lg/relaxed lg:text-xl/relaxed xl:text-xl/relaxed">
            <p>
              I'm an indie hacker building a personalized learning platform that
              tailors educational content to individual needs.<br/>
              <br />
               I have a deep passion for cybersecurity and
              continuously apply my knowledge to real-world projects.
              <br />
              <br />
              <p>
                I'm always exploring new technologies and learning opportunities
                in cybersecurity and personalized learning solutions.
              </p>
            </p>
          </div>
        </div>
        <Avatar className="mx-auto aspect-square overflow-hidden rounded-xl sm:w-full">
          <AvatarImage
            src="/placeholder.svg"
            alt="About"
            className="object-cover"
          />
          <AvatarFallback>ME</AvatarFallback>
        </Avatar>
      </div>
    </section>
  );
}
