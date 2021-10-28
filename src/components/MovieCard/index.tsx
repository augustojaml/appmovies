import { Star, Clock } from 'react-feather';
import { Container } from './styled';

interface IMovie {
  Genre_id: string;
  Title: string;
  Poster: string;
  imdbRating: number;
  Genre: string;
  Runtime: string;
}

interface IMovieCard {
  movie: IMovie;
}

const img =
  'https://m.media-amazon.com/images/M/MV5BZjEwNjYyMTMtODc5Yi00NTg5LTkwMzAtZTkyOTcyNTFkMGIyXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg';

export function MovieCard({ movie }: IMovieCard) {
  return (
    <>
      <Container>
        <img src={movie.Poster} />
        <div className="background">
          <div className="content">
            <strong>{movie.Title}</strong>
            <footer>
              <div>
                <Star />
                {Number(movie.imdbRating)}/10
              </div>
              <div>
                <Clock />
                {movie.Runtime}
              </div>
            </footer>
          </div>
        </div>
      </Container>
    </>
  );
}
