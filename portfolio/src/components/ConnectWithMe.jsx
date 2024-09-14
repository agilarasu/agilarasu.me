import React from 'react';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { SiIndiehackers } from "react-icons/si";
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const socials = [
  {
    name: 'GitHub',
    icon: FaGithub,
    link: 'www.github.com/agilarasu'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedinIn,
    link: 'www.linkedin.com/in/agilarasu'
  },
  {
    name: 'X',
    icon: FaXTwitter,
    link: 'www.twitter.com/agilarasu'
  },
  {
  name: 'IndieHackers',
  icon: SiIndiehackers,
  link: 'www.indiehackers.com/agilarasu'
  }
]

export default function ConnectWithMe() {
  return (
    <section className="container mx-auto w-full py-16">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-8">Connect With Me</h2>
        <p className="text-center text-muted-foreground mb-12">
          Find me on these platforms and let's connect!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {socials.map((social, index) => (
            <a href={`https://${social.link}`} target="_blank" rel="noopener noreferrer" key={index} className="flex flex-col items-center">
              <social.icon className="w-12 h-12 mb-4 text-white" />
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}