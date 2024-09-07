import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Figma, Database, Cloud, Network, Github, ShieldCheck, CodeXml, ScrollText } from "lucide-react"
import { DiJsBadge } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const skills = [
  {
    name: 'Penetration Testing',
    icon: ShieldCheck,
    description: 'Skilled in identifying and exploiting vulnerabilities in web applications and networks.'
  },
  {
    name: 'React JS',
    icon: FaReact,
    description: 'Proficient in building modern web applications with React, including state management with Redux.'

  },
  {
    name: 'JavaScript',
    icon: DiJsBadge,
    description: 'Proficient in modern JavaScript, including ES6+ features and popular frameworks/libraries like React and Node.js.'
  },
  {
    name: "Django",
    icon: SiDjango,
    description: "Proficient in building web applications with Django, including RESTful APIs and authentication."
  },
  {
    name: 'Python',
    icon: FaPython,
    description: 'Proficient in Python programming, including data analysis, web scraping, and automation.'
  },
  {
    name: 'Azure',
    icon: SiMicrosoftazure,
    description: 'Familiar with Microsoft Azure cloud services, including virtual machines, storage, and networking.'
  },

  


]

export default function Skills() {
  return (
    <section className="container mx-auto w-full py-16">
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
      <p className="text-center text-muted-foreground mb-12">
        Here are the key skills I have developed over the years.
      </p>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="bg-card hover:bg-accent transition-colors duration-200"
          >
            <CardHeader className="flex flex-col items-center">
              <skill.icon className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>{skill.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}