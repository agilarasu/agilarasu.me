import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink, Star } from 'lucide-react';
import placeholder from "@/assets/placeholder.svg";

const ReadingList = () => {
  // Book recommendations and suggestions
  const bookSuggestions = [
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas, Andrew Hunt",
      rating: 5,
      genre: "Programming",
      recommendation: "Essential for any developer. Changed how I think about code quality and professional development."
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      rating: 5,
      genre: "History",
      recommendation: "Fascinating perspective on human history and the cognitive revolution. Eye-opening read."
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      rating: 5,
      genre: "Programming",
      recommendation: "A must-read for writing maintainable, readable code. Every programmer should have this."
    },
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      rating: 4,
      genre: "Design",
      recommendation: "Great insights into user-centered design and how design affects daily interactions."
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      rating: 5,
      genre: "Self-Help",
      recommendation: "Practical framework for building good habits and breaking bad ones. Highly actionable."
    },
    {
      title: "System Design Interview",
      author: "Alex Xu",
      rating: 4,
      genre: "Programming",
      recommendation: "Excellent resource for understanding large-scale system architecture and design patterns."
    }
  ];

  const StarRating = ({ rating }) => {
    if (!rating) return <span className="text-xs text-muted-foreground">Coming Soon</span>;
    
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? 'text-yellow-500 fill-current'
                : 'text-muted-foreground/30'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="py-20 bg-background-muted">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Readings</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Books that have shaped my thinking and approach to technology. Here are my recommendations 
            for fellow developers, learners, and curious minds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookSuggestions.map((book, index) => (
            <Card key={index} className="border-border bg-card shadow-sm hover:shadow-md transition-all duration-200 flex flex-col">
              <img 
                src={placeholder}
                alt={book.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="p-6 flex flex-col flex-grow">
                <h4 className="font-bold text-foreground text-lg">{book.title}</h4>
                <p className="text-muted-foreground text-sm mb-2">by {book.author}</p>
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                    {book.genre}
                  </span>
                  <StarRating rating={book.rating} />
                </div>
                <p className="text-muted-foreground text-sm italic mt-auto">
                  "{book.recommendation}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Goodreads Profile Link */}
        <div className="text-center mt-12">
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://www.goodreads.com/agilarasu" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              View More on Goodreads
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReadingList;
