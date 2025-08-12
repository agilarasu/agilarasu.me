import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { FaPython, FaReact, FaAws } from "react-icons/fa";
import { DiJsBadge } from "react-icons/di";
import { SiTailwindcss, SiDocker, SiTypescript, SiNextdotjs, SiFastapi, SiMongodb, SiPostgresql, SiVercel, SiMicrosoftazure, SiLangchain } from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: 'Python', icon: FaPython, level: 'Advanced', color: 'text-blue-600' },
        { name: 'JavaScript', icon: DiJsBadge, level: 'Advanced', color: 'text-yellow-500' },
        { name: 'TypeScript', icon: SiTypescript, level: 'Intermediate', color: 'text-blue-700' }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: 'React', icon: FaReact, level: 'Advanced', color: 'text-blue-400' },
        { name: 'Next.js', icon: SiNextdotjs, level: 'Intermediate', color: 'text-gray-900 dark:text-white' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Advanced', color: 'text-cyan-500' }
      ]
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: 'FastAPI', icon: SiFastapi, level: 'Advanced', color: 'text-green-600' },
        { name: 'MongoDB', icon: SiMongodb, level: 'Intermediate', color: 'text-green-500' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 'Intermediate', color: 'text-blue-800' }
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: 'LangChain', icon: SiLangchain, level: 'Intermediate', color: 'text-purple-600' }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: 'AWS', icon: FaAws, level: 'Intermediate', color: 'text-orange-500' },
        { name: 'Azure', icon: SiMicrosoftazure, level: 'Intermediate', color: 'text-blue-600' },
        { name: 'Docker', icon: SiDocker, level: 'Intermediate', color: 'text-blue-500' },
        { name: 'Vercel', icon: SiVercel, level: 'Advanced', color: 'text-gray-900 dark:text-white' }
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced':
        return 'bg-green-100/10 text-green-400';
      case 'Intermediate':
        return 'bg-blue-100/10 text-blue-400';
      case 'Beginner':
        return 'bg-yellow-100/10 text-yellow-400';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Love to Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I use to build 
            innovative solutions across the full stack.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-xl font-bold mb-6 text-foreground border-b border-border pb-2">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <Card key={skillIndex} className="group hover:shadow-md transition-all duration-200 border border-border bg-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-muted">
                            <skill.icon className={`w-6 h-6 ${skill.color}`} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">
                              {skill.name}
                            </h4>
                          </div>
                        </div>
                        
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications preview */}
        <div className="mt-16 bg-card rounded-lg p-8 border border-border">
          <h3 className="text-xl font-bold mb-4 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">4+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">GitHub</div>
              <div className="text-sm text-muted-foreground">Foundations</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">MongoDB</div>
              <div className="text-sm text-muted-foreground">Python Developer</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">DataCamp</div>
              <div className="text-sm text-muted-foreground">Data Manipulation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;