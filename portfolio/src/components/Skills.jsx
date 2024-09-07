import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Figma, Database, Cloud,  Network, Github } from "lucide-react"

const skills = [
  {
    name: 'JavaScript',
    icon: Code,
    description: 'Proficient in modern JavaScript, including ES6+ features and popular frameworks/libraries like React and Node.js.'
  },
  {
    name: 'UI/UX Design',
    icon: Figma,
    description: 'Skilled in creating user-friendly and visually appealing interfaces using tools like Figma and Sketch.'
  },
  {
    name: 'Database Management',
    icon: Database,
    description: 'Experienced in designing and managing relational databases using SQL and NoSQL technologies like PostgreSQL and MongoDB.'
  },
  {
    name: 'Cloud Computing',
    icon: Cloud,
    description: 'Knowledgeable in cloud-based infrastructure and services, including AWS, Azure, and Google Cloud Platform.'
  },
  {
    name: 'Version Control',
    icon: Github,
    description: 'Proficient in using Git for version control and collaborating with teams on software projects.'
  },
  {
    name: 'System Design',
    icon: Network,
    description: 'Experienced in designing scalable and efficient software systems, including microservices and distributed architectures.'
  },
]

export default function Skills() {
  return (
    <section className="container mx-auto w-full py-16">
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
      <p className="text-center text-muted-foreground mb-12">
        Here are the key skills I have developed over the years.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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