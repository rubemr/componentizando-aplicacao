import { MovieCard } from '../components/MovieCard';

interface ContentProps {
  movie: {
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }
}

export function Content(props: ContentProps) {
  return <MovieCard 
            title={props.movie.Title} 
            poster={props.movie.Poster} 
            runtime={props.movie.Runtime} 
            rating={props.movie.Ratings[0].Value} 
         />
}