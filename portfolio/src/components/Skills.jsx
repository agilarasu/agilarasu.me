import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaPython, FaReact } from "react-icons/fa"
import { DiJsBadge } from "react-icons/di"
import { SiTailwindcss, SiDocker, SiTypescript, SiNextdotjs, SiFastapi, SiMongodb, SiPostgresql, SiVercel, SiMicrosoftazure, SiLangchain } from "react-icons/si"

const skills = [
  {
    name: 'Python',
    icon: FaPython,
    description: 'Proficient in Python programming for backend development and automation.'
  },
  {
    name: 'JavaScript',
    icon: DiJsBadge,
    description: 'Strong knowledge of modern JavaScript and ES6+ features.'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    description: 'Experience with TypeScript for building type-safe applications.'
  },
  {
    name: 'React JS',
    icon: FaReact,
    description: 'Proficient in building modern and responsive web interfaces.'
  },
  {
    name: 'Next JS',
    icon: SiNextdotjs,
    description: 'Experience with server-side rendering and static site generation.'
  },
  {
    name: 'Fast API',
    icon: SiFastapi,
    description: 'Building high-performance APIs with Python.'
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    description: 'Yo bro theriyum.'
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    description: 'Experience with SQL database systems.'
  },
  {
    name: 'Vercel',
    icon: SiVercel,
    description: 'Deployment and hosting of frontend applications.'
  },
  {
    name: 'Azure',
    icon: SiMicrosoftazure,
    description: 'Cloud infrastructure and service management.'
  },
  {
    name: 'Langchain',
    icon: SiLangchain,
    description: 'Experience with Langchain for building AI applications.'
  },
  {
    name: 'GSAP',
    icon: () => <span className="text-[hsl(var(--foreground))]">GSAP</span>, // Placeholder for GSAP icon
    description: 'Experience with GSAP for animations and transitions.'
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    description: 'Proficient in using Tailwind CSS for styling and responsive design.'
  },
  {
    name: 'Docker',
    icon: SiDocker,
    description: 'Experience with containerization and Docker for application deployment.'
  }
]

export default function Skills() {
  return (
    <section className="container mx-auto w-[80%] md:w-full py-20 min-h-screen">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-[hsl(var(--accent))] text-center">My Skills</h2>
      <p className="text-center text-muted-foreground mb-12">
        Here are the key skills I have developed over the years.
      </p>
      <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="bg-card border border-transparent hover:border-primary hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            <CardHeader className="flex items-center gap-4 p-6 pb-4">
              <div className="p-3 rounded-full bg-primary/10 shrink-0">
                <skill.icon className="w-8 h-8 text-[hsl(var(--foreground))]" />
              </div>
              <CardTitle className="text-lg font-semibold leading-tight">{skill.name}</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-0"> 
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}