import React from 'react';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaGoodreads } from 'react-icons/fa6';
import { SiLeetcode } from "react-icons/si";

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
    name: 'Goodreads',
    icon: FaGoodreads,
    link: 'www.goodreads.com/agilarasu'
  },
  {
    name: 'Leetcode',
    icon: SiLeetcode,
    link: 'www.leetcode.com/u/agilarasu/'
  },
  {
    name: 'X',
    icon: FaXTwitter,
    link: 'www.twitter.com/agilarasu'
  },
]

export default function ConnectWithMe() {
  return (
    <section className="container mx-auto w-full py-20">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-[hsl(var(--accent))]">Connect With Me</h2>
        <p className="text-center text-muted-foreground mb-12">
          Find me on these platforms and let's connect!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {socials.map((social, index) => (
            <a href={`https://${social.link}`} target="_blank" rel="noopener noreferrer" key={index} className="flex flex-col items-center">
              <social.icon className="w-12 h-12 mb-4 text-[hsl(var(--accent-background))]" />
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}