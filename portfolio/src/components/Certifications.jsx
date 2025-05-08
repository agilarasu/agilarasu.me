import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react"; // Import some icons
import {SiMongodb, SiDatacamp, SiPackt, SiGithub} from "react-icons/si"

const certifications = [
  {
    name: "GitHub Foundations",
    issuedBy: "Github",
    date: "Jan 2025",
    verifyLink: "https://www.credly.com/badges/46e48b55-f431-4de8-8ec4-e63556bd6357/public_url", 
    icon: SiGithub, 
  },
  {
    name: "MongoDB Python Developer",
    issuedBy: "MongoDB",
    date: "Jul 2024",
    verifyLink: "https://learn.mongodb.com/c/ipmRKq_fREOkp9I7ZhW8Kg",
    icon: SiMongodb, 
  },
  {
    name: "Data Manipulation with pandas",
    issuedBy: "Datacamp",
    date: "Sep 2023",
    verifyLink: "https://www.datacamp.com/completed/statement-of-accomplishment/course/41d5da62fab2d7adf6f17fd58c3f9d9dd508462f",
    icon: SiDatacamp,
  },
   {
    name: "Security and Risk Management",
    issuedBy: "Packt",
    date: "Mar 2025",
    verifyLink: "https://www.coursera.org/account/accomplishments/verify/MX5NH59S1GJ8", 
    icon: SiPackt,
  }
];

export default function Certifications() {
  return (
    <section className="container mx-auto w-[80%] mb:w-full py-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-[hsl(var(--accent))] leading-tight">
          Certifications
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto"> 
          Proof of skills and continuous learning journey. Here are a few notable achievements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {certifications.map((cert, index) => {
          const IconComponent = cert.icon || Award; // Fallback to a generic Award icon

          return (
            <Card
              key={index}
              className="flex flex-col justify-between border-l-4 border-l-[hsl(var(--border))] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out" // Added left border, hover effects
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                 <CardTitle className="text-xl font-semibold pr-2">
                   {cert.name}
                 </CardTitle>
                 <IconComponent className="w-8 h-8 text-[hsl(var(--accent))] flex-shrink-0" /> 
              </CardHeader>
              <CardContent className="pt-4"> 
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Issued by:</span> {cert.issuedBy}
                </p>
                <p className="text-sm text-muted-foreground mt-2"> 
                   <span className="font-medium text-foreground">Date:</span> {cert.date}
                </p>

                {/* Render verify button only if a valid link is provided */}
                {cert.verifyLink && cert.verifyLink !== '#' && (
                  <Button
                    variant="secondary" 
                    size="sm"
                    className="mt-6 inline-flex items-center rounded-full" 
                    asChild 
                  >
                    <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer">
                      Verify Credential
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}