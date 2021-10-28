import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface IMoviesProvider {
  children: ReactNode;
}

interface IGenres {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface IMovies {
  Genre_id: string;
  Title: string;
  Poster: string;
  imdbRating: number;
  Genre: string;
  Runtime: string;
}

interface IMoviesContext {
  genres: IGenres[];
  movies: IMovies[];
  selectedGender: IGenres;
  handleChangeGender: (genre: IGenres) => void;
}

const MoviesContext = createContext({} as IMoviesContext);

function MoviesProvider({ children }: IMoviesProvider) {
  const [genres, setGenres] = useState<IGenres[]>([]);
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [selectedGender, setSelectedGender] = useState<IGenres>({
    id: 1,
    name: 'action',
    title: 'Ação',
  });

  function handleChangeGender(genre: IGenres) {
    setSelectedGender(genre);
  }

  useEffect(() => {
    (async () => {
      const response = await api.get('/genres');
      setGenres(response.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await api.get<IMovies[]>('/movies');
      const filteredMovies = response.data.filter((movie) =>
        movie.Genre.includes(selectedGender.name.charAt(0).toUpperCase() + selectedGender.name.slice(1))
      );
      setMovies(filteredMovies);
    })();
  }, [selectedGender]);

  return (
    <>
      <MoviesContext.Provider value={{ genres, movies, selectedGender, handleChangeGender }}>
        {children}
      </MoviesContext.Provider>
    </>
  );
}

function useMovies() {
  return useContext(MoviesContext);
}

export { MoviesProvider, useMovies };
