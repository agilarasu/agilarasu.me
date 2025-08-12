import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles } from 'lucide-react';

// Import project images
import atoms from "../assets/atoms.png";
import geminipdf from "../assets/gemini.png";
import mltext from "../assets/mltext.png";
import quizchat from "../assets/quizchat.png";
import personalSite from "../assets/personalSite.png";
import clashofclans from "../assets/clashofclans_assets/clashofclans_screen2018_summer.webp";

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Atoms - AI Powered Learning",
      description: "A comprehensive learning platform that leverages Large Language Models to help users understand complex concepts through personalized, interactive explanations and adaptive learning paths.",
      image: atoms,
      tags: ["AI/ML", "React", "Next.js", "LangChain"],
      liveUrl: "https://atoms-chi.vercel.app/",
      githubUrl: null,
      featured: true
    },
    {
      id: 2,
      title: "Gemini PDF Chat",
      description: "An intelligent RAG-based application that uses Google's Gemini API to extract meaningful insights from PDF documents, enabling natural language conversations with your documents.",
      image: geminipdf,
      tags: ["RAG", "Gemini API", "Python", "Streamlit"],
      liveUrl: null,
      githubUrl: "https://github.com/agilarasu/gemini_pdf_chat",
      featured: true
    },
    {
      id: 3,
      title: "ML Text Suggestions",
      description: "A sophisticated machine learning model that provides real-time grammar correction and intelligent text suggestions, improving writing quality and productivity.",
      image: mltext,
      tags: ["Machine Learning", "NLP", "Python", "TensorFlow"],
      liveUrl: null,
      githubUrl: "https://github.com/agilarasu/text-suggestion",
      featured: true
    }
  ];

  const otherProjects = [
    {
      title: "Quiz Chat",
      description: "Interactive chat-based quiz system powered by LLM for engaging educational experiences.",
      tags: ["LLM", "React", "Interactive Learning"],
      liveUrl: "https://quiz-chat.vercel.app/",
      githubUrl: null
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with modern web technologies and elegant design.",
      tags: ["React", "Tailwind CSS", "Responsive Design"],
      liveUrl: null,
      githubUrl: "https://github.com/agilarasu/agilarasu.github.io"
    },
    {
      title: "ClashPy API Wrapper",
      description: "A Python library wrapper for seamless interaction with the Clash of Clans API.",
      tags: ["Python", "API", "Package Development"],
      liveUrl: "https://pypi.org/project/clashpy/",
      githubUrl: null
    }
  ];

  const ProjectCard = ({ project, isMain = false }) => (
    <Card className={`project-card group hover:shadow-xl transition-all duration-300 border border-border bg-card ${isMain ? 'row-span-2' : ''} `}>
      {project.image && (
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full object-cover transition-transform duration-300 group- ${isMain ? 'h-64' : 'h-48'}`}
          />
          {project.featured && (
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
              <Sparkles className="w-3 h-3 mr-1" />
              Featured
            </div>
          )}
        </div>
      )}
      
      <CardHeader className="pb-3">
        <CardTitle className={`${isMain ? 'text-xl' : 'text-lg'} font-bold text-foreground`}>
          {project.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className={`text-muted-foreground leading-relaxed ${isMain ? 'text-base' : 'text-sm'}`}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2 pt-2">
          {project.liveUrl && (
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 "
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-1" />
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button
              size="sm"
              variant="outline"
              className="border-border text-foreground hover:bg-muted transition-all duration-300 "
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-1" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my passion for building innovative solutions 
            at the intersection of AI, web development, and user experience.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className={index === 0 ? 'lg:row-span-2' : ''}>
              <ProjectCard project={project} isMain={index === 0} />
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Other Notable Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* View More */}
        <div className="text-center mt-12 fade-in">
          <Button
            variant="outline"
            className="border-border text-foreground hover:bg-muted px-6 py-3 transition-all duration-300 "
            asChild
          >
            <a href="https://github.com/agilarasu" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
