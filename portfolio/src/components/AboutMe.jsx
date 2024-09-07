import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AboutMe() {
  return (
    <section className="w-[80%] mx-auto py-12 md:py-24 lg:py-32 bg-black">
            <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>

      <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <div className="prose text-white text-lg/relaxed lg:text-xl/relaxed xl:text-xl/relaxed">
            <p>
              Hi there! I'm a passionate web developer with a keen eye for design and a love for creating beautiful and
              functional websites. 
            </p>
            <p>
              When I'm not coding, you can find me exploring the great outdoors, reading the latest tech blogs, or
              tinkering with new gadgets. I'm constantly learning and growing, and I'm excited to bring that energy and
              enthusiasm to every project I work on.
            </p>
          </div>
        </div>
        <Avatar className="mx-auto aspect-square overflow-hidden rounded-xl sm:w-full">
          <AvatarImage src="/placeholder.svg" alt="About" className="object-cover" />
          <AvatarFallback>ME</AvatarFallback>
        </Avatar>
      </div>
    </section>
  )
}