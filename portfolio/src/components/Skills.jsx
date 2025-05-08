import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaPython, FaReact } from "react-icons/fa"
import { DiJsBadge } from "react-icons/di"
import { SiTypescript, SiNextdotjs, SiFastapi, SiMongodb, SiPostgresql, SiVercel, SiMicrosoftazure } from "react-icons/si"

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
  }
]

export default function Skills() {
  return (
    <section className="container mx-auto w-[80%] md:w-full py-20">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-[hsl(var(--accent))] text-center">My Skills</h2>
      <p className="text-center text-muted-foreground mb-12">
        Here are the key skills I have developed over the years.
      </p>
         <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <Card
            key={index}
            // Added distinct border on hover and subtle lift
            className="bg-card border border-transparent hover:border-primary hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            {/* Innovative Card Header: Prominent Icon with Background and side-by-side title */}
            <CardHeader className="flex items-center gap-4 p-6 pb-4">
              {/* Icon wrapper for styling */}
              <div className="p-3 rounded-full bg-primary/10 shrink-0"> {/* Use bg-primary/10 for a subtle background */}
                {/* Icon size slightly adjusted */}
                <skill.icon className="w-8 h-8 text-[hsl(var(--foreground))]" />
              </div>
              {/* Adjusted title font size and weight, added leading */}
              <CardTitle className="text-lg font-semibold leading-tight">{skill.name}</CardTitle>
            </CardHeader>
            {/* Improved Card Content: Description below header, left-aligned */}
            <CardContent className="px-6 pb-6 pt-0"> {/* pt-0 to reduce space between title and description */}
              {/* Adjusted description text size and line height */}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}