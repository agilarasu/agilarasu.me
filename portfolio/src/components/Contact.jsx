import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaGoodreads } from 'react-icons/fa6';
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://www.github.com/agilarasu',
      description: 'Check out my code and projects',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      url: 'https://www.linkedin.com/in/agilarasu',
      description: 'Connect professionally',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Goodreads',
      icon: FaGoodreads,
      url: 'https://www.goodreads.com/agilarasu',
      description: 'Follow my reading journey',
      color: 'hover:text-amber-600'
    },
    {
      name: 'LeetCode',
      icon: SiLeetcode,
      url: 'https://www.leetcode.com/u/agilarasu/',
      description: 'See my coding challenges',
      color: 'hover:text-orange-500'
    },
    {
      name: 'X (Twitter)',
      icon: FaXTwitter,
      url: 'https://www.twitter.com/agilarasu',
      description: 'Follow my thoughts and updates',
      color: 'hover:text-foreground'
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Coimbatore, India',
      color: 'text-blue-600'
    },
    {
      icon: Calendar,
      label: 'Availability',
      value: 'Open to opportunities',
      color: 'text-green-400'
    }
  ];

  return (
    <div className="py-20 bg-background-muted">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss technology, share ideas, or explore collaboration opportunities. 
            Whether you want to chat about AI, web development, or just connect over a good book recommendation, 
            feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium text-foreground">{info.value}</div>
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Interested in collaborating or have a question? I'd love to hear from you.
                  </p>
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                    asChild
                  >
                    <a href="mailto:agilarasu.contact@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Send me an email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Current Focus */}
            <Card className="border-border bg-gradient-to-br from-card to-muted">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-3">Currently Working On</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    ML projects at Aivar Innovation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Final year IT studies
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Building innovative AI solutions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Reading & continuous learning
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <div>
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle>Find Me Online</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:shadow-md transition-all duration-200 group hover:bg-muted"
                    >
                      <div className="flex items-center space-x-4">
                        <social.icon className={`w-6 h-6 text-muted-foreground group-hover:${social.color} transition-colors`} />
                        <div>
                          <div className="font-medium text-foreground">{social.name}</div>
                          <div className="text-sm text-muted-foreground">{social.description}</div>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="mt-6 text-center">
              <p className="text-muted-foreground mb-4">
                Interested in my work or want to collaborate?
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  className="border-border hover:bg-muted"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/agilarasu" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-border hover:bg-muted"
                  asChild
                >
                  <a href="https://github.com/agilarasu" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-4 h-4 mr-2" />
                    View GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
