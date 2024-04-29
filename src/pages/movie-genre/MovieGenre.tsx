import { useState } from 'react';
import SectionTitle from '../../ui/section-title/SectionTitle';
import QuizRadioOption from '../../components/quiz-option/QuizOption';
import './styles.scss';
import Button from '../../ui/button/Button';
import Header from '../../components/header/Header';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { stepForward } from '../../slices/quizSlice';
import { genreOptions } from './const/genres';

function MovieGenre() {
  const [selectedGenre, setSelectedGenre] = useState('');
  const dispatch = useAppDispatch();

  const handleGenreOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGenre(e.target.value);
  };

  const handleContinueClick = () => {
    localStorage.setItem('movieGenre', selectedGenre);
    dispatch(stepForward());
  };

  return (
    <>
      <Header />
      <div className='container'>
        <SectionTitle>Your favorite movie genre?</SectionTitle>
        <div className='genres-list'>
          {genreOptions.map((option) => (
            <QuizRadioOption
              id={option.value}
              value={option.value}
              label={option.label}
              emoji={option.emoji}
              isChecked={selectedGenre === option.value}
              onChange={handleGenreOptionChange}
            />
          ))}
        </div>
      </div>
      <div className='container'>
        <Button onClick={handleContinueClick} disabled={!selectedGenre}>
          Continue
        </Button>
      </div>
    </>
  );
}

export default MovieGenre;
