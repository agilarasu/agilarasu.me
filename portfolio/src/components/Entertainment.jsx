import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Film, Star } from 'lucide-react';
import placeholder from "@/assets/placeholder.svg";

const Entertainment = () => {
  const games = [
    {
      title: "Marvel's Spider-Man",
      description: "A modern retelling of the classic hero's origin.",
      rating: 5,
      genre: "Action/Adventure",
      image: "https://upload.wikimedia.org/wikipedia/en/e/e1/Spider-Man_PS4_cover.jpg"
    },
    {
      title: "God of War",
      description: "Epic mythology and father-son journey",
      rating: 5,
      genre: "Action/Adventure",
      image: "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-hub-thumbnail-ragnarok-en-09sept21?$1600px$"
    },
    {
      title: "Ghost of Tsushima",
      description: "Beautiful samurai open-world experience",
      rating: 5,
      genre: "Action/Adventure",
      image: "https://upload.wikimedia.org/wikipedia/en/b/b6/Ghost_of_Tsushima.jpg"
    },
    {
      title: "Red Dead Redemption 2",
      description: "Immersive western storytelling masterpiece",
      rating: 5,
      genre: "Action/Adventure",
      image: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg"
    },
  ];

  const movies = [
    {
      title: "Superman",
      description: "A modern retelling of the classic hero's origin.",
      rating: 5,
      year: "2025",
      image: "https://irs.www.warnerbros.com/keyart-jpeg/movies/media/browser/superman_2025_keyart_0.jpg"
    },
    {
      title: "The Dark Knight Rises",
      description: "Christopher Nolan's epic conclusion to the trilogy",
      rating: 5,
      year: "2012",
      image: "https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg"
    },
    {
      title: "Iron Man",
      description: "The film that started the MCU journey",
      rating: 5,
      year: "2008",
      image: "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg"
    },
    {
      title: "How to Train Your Dragon",
      description: "Heartwarming tale of friendship and growth",
      rating: 5,
      year: "2010",
      image: "https://upload.wikimedia.org/wikipedia/en/9/99/How_to_Train_Your_Dragon_Poster.jpg"
    }
  ];

  const StarRating = ({ rating }) => {
    if (!rating) return <span className="text-xs text-muted-foreground">Coming Soon</span>;

    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= rating
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
            The games and movies, along with their characters, that inspire my creativity and shape who I am          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Gamepad2 className="w-6 h-6 mr-3 text-primary" />
            Favorite Games
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {games.map((game, index) => (
              <Card key={index} className="border-border bg-card shadow-sm hover:shadow-md transition-all duration-200 flex flex-row overflow-hidden">
                <div className="relative flex-shrink-0 w-28 sm:w-32 md:w-36 lg:w-40 aspect-[2/3] overflow-hidden rounded-l-xl bg-muted">
                  <img
                    src={game.image || placeholder}
                    alt={game.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow min-w-0">
                  <h4 className="font-bold text-foreground">{game.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1 flex-grow break-words">{game.description}</p>
                  <div className="flex flex-col gap-2 mt-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs w-fit">{game.genre}</span>
                    <div className="flex items-center">
                      <StarRating rating={game.rating} />
                    </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {movies.map((movie, index) => (
              <Card key={index} className="border-border bg-card shadow-sm hover:shadow-md transition-all duration-200 flex flex-row overflow-hidden">
                <div className="relative flex-shrink-0 w-28 sm:w-32 md:w-36 lg:w-40 aspect-[2/3] overflow-hidden rounded-l-xl bg-muted">
                  <img
                    src={movie.image || placeholder}
                    alt={movie.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow min-w-0">
                  <h4 className="font-bold text-foreground">{movie.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1 flex-grow break-words">{movie.description}</p>
                  <div className="flex flex-col gap-2 mt-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs w-fit">{movie.year}</span>
                    <div className="flex items-center">
                      <StarRating rating={movie.rating} />
                    </div>
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
                  Stories from games like God of War and Ghost of Tsushima, and the journeys of their characters,
                  have shaped my perspective and values through their powerful arcs and moral depth.
                </p>
              </div>
              <div>
                <Film className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Narratives That Endure</h4>
                <p className="text-muted-foreground text-sm">
                  From Nolan's layered protagonists to Marvel's evolving heroes, these character-driven tales
                  have influenced the way I think, empathize, and approach challenges in life.
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
