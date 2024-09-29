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
const projects = [
  {
    name: "Clashinfo - Clash of Clans API Wrapper",
    image: clashofclans,
    description: "A Python Wrapper for interacting with the Clash of Clans API.",
    link: "https://pypi.org/project/clashpy/",
  },
  {
    name: "Gemini PDF Chat",
    image: geminipdf,
    description: "An RAG for retrieving and generating information from PDFs using Gemini API.",
    link: "https://github.com/agilarasu/gemini_pdf_chat",
  },
  {
    name: "Python PWA Installer",
    image: "/placeholder.svg?height=192&width=384",
    description: "A Python script to convert any website into a Progressive Web App (PWA).",
    link: "https://github.com/agilarasu/pwa_maker",
  },
  {
    name: "Windows Dock",
    image: "/placeholder.svg?height=192&width=384",
    description: "A customizable dock for Windows, inspired by GNOME dock features.",
    link: "https://github.com/agilarasu/windows-dock",
  },
  {
    name: "Personal Site",
    image: personalSite,
    description: "A personal Site developed using React.js.",
    link: "https://agilarasu.github.io",
  },
  {
    name: "Heimdall - AI-Powered Penetration Testing",
    image: "/placeholder.svg?height=192&width=384",
    description: "An advanced penetration testing tool leveraging AI to identify vulnerabilities. (Currently in a private repository due to security concerns)",
    link: "https://github.com/agilarasu/heimdall",
  },
];

export default function MyProjects() {
  return (
    <section className="container mx-auto w-full py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">My Projects</h2>
        <p className="text-muted-foreground mt-2">
          Check out some of the projects I've worked on. From web apps to mobile
          experiences, I've got a diverse portfolio.
        </p>
      </div>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-card overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-75"
              style={{ maxWidth: "100%", maxHeight: "100%" }} // Add this line to limit the image size
            />
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>

              <Drawer>
                <DrawerTrigger>
                  <Button variant="outline" asChild>
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
