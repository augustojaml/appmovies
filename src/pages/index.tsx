import { ChangeTheme } from '../components/ChangeTheme';
import { Header } from '../components/Header';
import { MovieCard } from '../components/MovieCard';
import { SideBarItem } from '../components/SideBarItem';
import { useMovies } from '../hooks/useMovies';
import { Container } from './styled';

export default function Home() {
  const { genres, movies, selectedGender } = useMovies();

  return (
    <>
      <Container>
        <div className="sidebar">
          <Header>
            <ChangeTheme />
            <h1 className="desktop">
              <strong>Watch</strong>ME
            </h1>
            <h1 className="mobile">
              <strong>W</strong>E
            </h1>
          </Header>

          {genres.map((genre) => (
            <SideBarItem key={genre.id} genre={genre} />
          ))}
        </div>
        <div className="container">
          <div className="content">
            <Header>
              <h1>
                <strong>Categoria:</strong> <span>{selectedGender.title}</span>
              </h1>
            </Header>
            <section>
              {movies.map((movie) => (
                <MovieCard key={movie.Title} movie={movie} />
              ))}
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
