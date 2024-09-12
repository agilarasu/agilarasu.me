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
const projects = [
  {
    name: "Clashinfo - Clash of Clans API Library",
    image: clashofclans,
    description:
      "A Python library for interacting with the Clash of Clans API.",
    link: "https://pypi.org/project/clashpy/",
  },
  {
    name: "Python PWA Installer",
    image: "/placeholder.svg?height=192&width=384",
    description:
      "A Python script to install any website into a lightweight PWA.",
    link: "https://github.com/agilarasu/pwa_maker",
  },
  {
    name: "Windows Dock",
    image: "/placeholder.svg?height=192&width=384",
    description: "A dock for Windows with features similar to GNOME dock.",
    link: "https://example.com/windows-dock",
  },
  //  {
  //    name: 'Weather Station API',
  //    image: '/placeholder.svg?height=192&width=384',
  //    description: 'A fully-featured API for Davis weather station Device, built with Django REST framework.',
  //    link: 'https://example.com/weather-station-api'
  //},
  {
    name: "Personal Blog",
    image: "/placeholder.svg?height=192&width=384",
    description: "A personal blog built with React.js.",
    link: "https://example.com/personal-blog",
  },
  {
    name: "Heimdall - AI-Powered Penetration Testing ",
    image: "/placeholder.svg?height=192&width=384",
    description:
      "(Currently on private repo due to security issues) A penetration testing tool that uses AI models to identify vulnerabilities.",
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
