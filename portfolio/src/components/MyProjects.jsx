import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    name: 'E-commerce Platform',
    image: '/placeholder.svg?height=192&width=384',
    description: 'A fully-featured e-commerce platform built with React and Next.js.',
    link: 'https://example.com/ecommerce'
  },
  {
    name: 'Social Media App',
    image: '/placeholder.svg?height=192&width=384',
    description: 'A modern social media app built with React, Firebase, and Material-UI.',
    link: 'https://example.com/socialmedia'
  },
  {
    name: 'Task Management App',
    image: '/placeholder.svg?height=192&width=384',
    description: 'A powerful task management app built with React, Redux, and Firebase.',
    link: 'https://example.com/taskmanagement'
  },
  {
    name: 'Personal Blog',
    image: '/placeholder.svg?height=192&width=384',
    description: 'A personal blog built with Next.js and Markdown.',
    link: 'https://example.com/personalblog'
  },
]

export default function MyProjects() {
  return (
    <section className="container mx-auto w-full py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">My Projects</h2>
        <p className="text-muted-foreground mt-2">
          Check out some of the projects I've worked on. From web apps to mobile experiences, I've got a diverse portfolio.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-card overflow-hidden">
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-75"
            />
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <Button variant="outline" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}