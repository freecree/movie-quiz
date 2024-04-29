import { useState } from 'react';
import Button from '../../ui/button/Button';
import Input from '../../ui/input/Input';
import SectionTitle from '../../ui/section-title/SectionTitle';
import Header from '../../components/header/Header';
import { stepForward } from '../../slices/quizSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';

function MovieTitle() {
  const dispatch = useAppDispatch();
  const [movieTitle, setMovieTitle] = useState('');
  const [titleInputError, setTitleInputError] = useState<string | null>(null);

  const invalidCharsRegex = /[%^&$*()]/;

  const handleInputChange = (value: string) => {
    if (invalidCharsRegex.test(value)) {
      setTitleInputError('Movie title contains invalid characters: %^&$*().');
    } else if (value.trim().length === 0) {
      setTitleInputError('Movie title can not be empty');
    } else {
      setTitleInputError(null);
    }
    setMovieTitle(value);
  };

  const isFormValid = () => {
    return titleInputError === null;
  };

  const handleContinueClick = () => {
    localStorage.setItem('movieTitle', movieTitle);
    dispatch(stepForward());
  };

  return (
    <>
      <Header />
      <div className='container'>
        <SectionTitle>Enter movie title</SectionTitle>
        <Input
          placeholder='Movie title here'
          value={movieTitle}
          onChange={handleInputChange}
          error={titleInputError}
        />
      </div>
      <div className='container'>
        <Button disabled={!isFormValid()} onClick={handleContinueClick}>
          Continue
        </Button>
      </div>
    </>
  );
}

export default MovieTitle;
