import React from 'react';
import { MapPin, Briefcase, GraduationCap, Heart } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import placeholder from "@/assets/placeholder.svg";

const About = () => {
  return (
    <div className="py-20 bg-background-muted">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into my journey, passions, and what drives me as a technologist and lifelong learner.
          </p>
        </div>

        {/* Main content */}
        <div className="space-y-12">
          {/* Professional background */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* About Image */}
              <div className="flex justify-center lg:justify-start mb-6">
                <img 
                  src={placeholder} 
                  alt="About me" 
                  className="w-64 h-48 object-cover rounded-lg shadow-md border border-gray-200"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Briefcase className="w-6 h-6 mr-3 text-primary" />
                  Professional Journey
                </h3>
                <div className="prose prose-stone dark:prose-invert max-w-none text-muted-foreground">
                  <p className="leading-relaxed mb-4">
                    I'm a <strong className="text-foreground">final year IT student</strong> passionate about developing impactful technology solutions. 
                    My expertise spans across <strong className="text-foreground">Artificial Intelligence, Web Development,</strong> and 
                    <strong className="text-foreground"> Cybersecurity</strong>, driven by an insatiable curiosity to explore emerging technologies.
                  </p>
                  <p className="leading-relaxed">
                    Currently, I'm gaining hands-on experience as an ML intern at Aivar Innovation in Coimbatore, 
                    where I work on cutting-edge AI solutions and contribute to real-world technology projects 
                    that make a difference.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-primary" />
                  What I Love
                </h3>
                <div className="prose prose-stone dark:prose-invert max-w-none text-muted-foreground">
                  <p className="leading-relaxed mb-4">
                    I have a deep passion for <strong className="text-foreground">building and engineering</strong> solutions that solve real problems. 
                    Whether it's developing a machine learning model, creating a web application, or diving into 
                    cybersecurity challenges, I approach each project with enthusiasm and attention to detail.
                  </p>
                  <p className="leading-relaxed">
                    I'm also an avid reader who believes that books expand our perspective and fuel innovation. 
                    You can often find me exploring various genres on my Goodreads profile, from technical books 
                    to thought-provoking literature that inspires new ideas.
                  </p>
                </div>
              </div>
            </div>

            {/* Side info cards */}
            <div className="space-y-4">
              <Card className="border-border bg-card shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Location</h4>
                      <p className="text-muted-foreground text-sm">Coimbatore, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Education</h4>
                      <p className="text-muted-foreground text-sm">Final Year IT Student</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Briefcase className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Current Role</h4>
                      <p className="text-muted-foreground text-sm">ML Intern</p>
                      <p className="text-muted-foreground/80 text-xs">Aivar Innovation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-xl font-bold mb-4 text-center">My Philosophy</h3>
            <p className="text-muted-foreground text-center leading-relaxed text-lg max-w-3xl mx-auto">
              I believe in <strong className="text-foreground">curiosity-driven learning</strong> and the power of technology to create positive change. 
              Every project is an opportunity to learn something new, every challenge is a chance to grow, 
              and every solution should aim to make the world a little bit better.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
