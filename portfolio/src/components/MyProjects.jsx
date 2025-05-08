import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import clashofclans from "../assets/clashofclans_assets/clashofclans_screen2018_summer.webp";
import geminipdf from "../assets/gemini.png";
import personalSite from "../assets/personalSite.png";
import atoms from "../assets/atoms.png";
import quizchat from "../assets/quizchat.png";
import mltext from "../assets/mltext.png";

const projects = [
  {
    name: "Atoms - AI Powered Learning",
    image: atoms,
    description: "A learning platform that helps users learn a concept with the help of LLMs.",
    link:"https://atoms-chi.vercel.app/"
  },
  {
    name: "Gemini PDF Chat",
    image: geminipdf,
    description: "A RAG-based application that uses Gemini API to extract and generate insights from PDF documents.",
    link: "https://github.com/agilarasu/gemini_pdf_chat",
  },
  {
    name: "Grammar Check & Text Suggestion",
    image: mltext,
    description: "A machine learning model that offers real-time grammar correction and text suggestions.",
    link: "https://github.com/agilarasu/text-suggestion" 
  },
  {
    name: "Portfolio Site",
    image: personalSite,
    description: "A personal portfolio website built with React.js and Tailwind CSS",
    link: "https://github.com/agilarasu/agilarasu.github.io",
  },
  {
    name: "Quiz Chat",
    image: quizchat,
    description: "An interactive chat-based quiz system powered by a LLM.",
    link: "https://quiz-chat.vercel.app/",
  },
  {
    name: "Clashinfo - Clash of Clans API Wrapper",
    image: clashofclans,
    description: "A Python wrapper library for interaction with the Clash of Clans API.",
    link: "https://pypi.org/project/clashpy/",
  },
];

export default function MyProjects() {
  return (
    <section className="container mx-auto w-full py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[hsl(var(--accent))]">My Projects</h2>
        <p className="text-muted-foreground mt-2">
          Check out some of the projects I've worked on. From web apps to ML Models.
        </p>
      </div>
      <div className="w-[80%] md:w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-card overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-75"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
            <CardHeader>
              <CardTitle className="text-[hsl(var(--primary))]">{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>

              <Drawer>
                <DrawerTrigger>
                  <Button variant="outline"  className="text-[hsl(var(--primary))]" asChild>
                    <a className="w-full">
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>{project.name}</DrawerTitle>
                    <DrawerDescription>{project.description}</DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button variant="default" asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                          className="b-full"
                        >
                            Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                    </Button>
                    <DrawerClose>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
