import './styles.scss';
import { useEffect, useState } from 'react';
import MovieCard from '../../components/movie-card/MovieCard';
import NoFindImage from '../../assets/facepalm.png';
import { IMovie } from '../../types/IMovie';
import Header from '../../components/header/Header';
import Button from '../../ui/button/Button';
import Loader from '../../components/loader/Loader';

function Result() {
  const [error, setError] = useState('');
  const [resultMovie, setResultFilm] = useState<IMovie | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFilms = async () => {
      setIsLoading(true);
      try {
        const movieTitle = localStorage.getItem('movieTitle');
        const response = await fetch(
          `http://www.omdbapi.com/?t=${movieTitle}&apikey=21fc6b4a`,
        );
        const filmData = await response.json();
        if (filmData.Error) {
          setResultFilm(null);
        } else {
          setResultFilm(filmData);
        }
        console.log('data: ', filmData);
      } catch {
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };
    fetchFilms();
  }, []);

  if (error)
    return (
      <div>
        <Header />
        {error}
      </div>
    );

  if (isLoading) {
    return <Loader />;
  }
  console.log('after return ', resultMovie, 'isLoading: ', isLoading);
  return (
    <>
      <Header />
      <div className='container'>
        {!isLoading && resultMovie ? (
          <MovieCard movie={resultMovie} />
        ) : (
          <div className='no-movie'>
            <img src={NoFindImage} alt='no movie' />
            <h2 className='no-movie__title'>Oops, no movie found</h2>
          </div>
        )}
      </div>
      <div className='container'>
        <Button onClick={() => {}}>Complete</Button>
      </div>
    </>
  );
}

export default Result;
