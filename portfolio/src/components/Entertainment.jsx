import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Film, Star } from 'lucide-react';
import placeholder from "@/assets/placeholder.svg";

const Entertainment = () => {
  const games = [
    {
      title: "God of War",
      description: "Epic mythology and father-son journey",
      rating: 5,
      genre: "Action/Adventure",
      image: placeholder
    },
    {
      title: "Ghost of Tsushima",
      description: "Beautiful samurai open-world experience",
      rating: 5,
      genre: "Action/Adventure",
      image: placeholder
    },
    {
      title: "Red Dead Redemption 2",
      description: "Immersive western storytelling masterpiece",
      rating: 5,
      genre: "Action/Adventure",
      image: placeholder
    },
    {
      title: "Call of Duty: Black Ops 2",
      description: "Iconic multiplayer and campaign memories",
      rating: 4,
      genre: "FPS",
      image: placeholder
    }
  ];

  const movies = [
    {
      title: "The Dark Knight Rises",
      description: "Christopher Nolan's epic conclusion to the trilogy",
      rating: 5,
      year: "2012",
      image: placeholder
    },
    {
      title: "Superman",
      description: "A modern retelling of the classic hero's origin.",
      rating: 4,
      year: "2025",
      image: placeholder
    },
    {
      title: "Iron Man",
      description: "The film that started the MCU journey",
      rating: 5,
      year: "2008",
      image: placeholder
    },
    {
      title: "How to Train Your Dragon",
      description: "Heartwarming tale of friendship and growth",
      rating: 5,
      year: "2010",
      image: placeholder
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
    <div className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entertainment & Inspiration</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The games and movies that inspire my creativity, storytelling, and passion for immersive experiences.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Gamepad2 className="w-6 h-6 mr-3 text-primary" />
            Favorite Games
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {games.map((game, index) => (
              <Card key={index} className="border-border bg-card shadow-sm hover:shadow-md transition-all duration-200 flex flex-col">
                <img 
                  src={placeholder}
                  alt={game.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h4 className="font-bold text-foreground">{game.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1 flex-grow">{game.description}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">{game.genre}</span>
                    <StarRating rating={game.rating} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Film className="w-6 h-6 mr-3 text-primary" />
            Favorite Movies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {movies.map((movie, index) => (
              <Card key={index} className="border-border bg-card shadow-sm hover:shadow-md transition-all duration-200 flex flex-col">
                <img 
                  src={placeholder}
                  alt={movie.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h4 className="font-bold text-foreground">{movie.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1 flex-grow">{movie.description}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">{movie.year}</span>
                    <StarRating rating={movie.rating} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why These Matter */}
        <div className="max-w-6xl mx-auto px-6 mt-16">
          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-xl font-bold mb-4 text-center">Why These Inspire Me</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div>
                <Gamepad2 className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Interactive Storytelling</h4>
                <p className="text-muted-foreground text-sm">
                  Games like God of War and Ghost of Tsushima showcase how technology can create 
                  emotionally resonant experiences that blend art, narrative, and interactivity.
                </p>
              </div>
              <div>
                <Film className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Visual Innovation</h4>
                <p className="text-muted-foreground text-sm">
                  From Nolan's practical effects to Marvel's CGI mastery, these films inspire 
                  my appreciation for the intersection of technology and creative expression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
