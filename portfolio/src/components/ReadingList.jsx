import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink, Star } from 'lucide-react';
import placeholder from "@/assets/placeholder.svg";

const ReadingList = () => {
  // Book recommendations and suggestions
  const bookSuggestions = [
    {
      title: "A Man Called Ove",
      author: "Fredrik Backman",
      rating: 5,
      genre: "Fiction",
      recommendation: "A heartwarming story about a grumpy old man who learns to love again.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1405259930i/18774964.jpg"
    },
    {
      title: "Outliers",
      author: "Malcolm Gladwell",
      rating: 5,
      genre: "Non-Fiction",
      recommendation: "A fascinating look at the factors that contribute to success.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1344266315i/3228917.jpg"
    },
    {
      title: "The Almanack of Naval Ravikant",
      author: "Eric Jorgenson",
      rating: 5,
      genre: "Non-Fiction",
      recommendation: "A collection of quotes from Naval Ravikant, a venture capitalist and founder of AngelList.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598011736i/54898389.jpg"
    },
    {
      title: "Source Code: My Beginnings",
      author: "Bill Gates",
      rating: 5,
      genre: "Non-Fiction",
      recommendation: "Bill Gates's memoir is a fascinating look at his life and the history of Microsoft.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1719004398i/213034913.jpg"
    },
    {
      title: "Britt-Marie Was Here",
      author: "Fredrik Backman",
      rating: 5,
      genre: "Fiction",
      recommendation: "A heartwarming story about a woman who learns to love again.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1460442061i/27406704.jpg"
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      rating: 5,
      genre: "Self-Help",
      recommendation: "Practical framework for building good habits and breaking bad ones. Highly actionable.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg"
    },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {bookSuggestions.map((book, index) => (
            <Card key={index} className="border-border bg-card shadow-sm hover:shadow-md transition-all duration-200 flex flex-row">
              <div className="relative flex-shrink-0 w-28 sm:w-32 md:w-36 lg:w-40 aspect-[2/3] overflow-hidden rounded-l-xl bg-muted">
                <img
                  src={book.image || placeholder}
                  alt={book.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
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
