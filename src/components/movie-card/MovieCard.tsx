import { IMovie } from '../../types/IMovie';
import './styles.scss';

interface IMovieCard {
  movie: IMovie;
}
function MovieCard({ movie }: IMovieCard) {
  return (
    <div className='film-card'>
      <img src={movie.Poster} alt={movie.Title} />
      <h1 className='film-card__title'>{movie.Title}</h1>
      <p className='film-card__text'>{movie.Year}</p>
    </div>
  );
}

export default MovieCard;
