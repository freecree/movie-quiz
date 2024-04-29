import { useAppSelector } from './hooks/redux-hooks';
import MovieGenre from './pages/movie-genre/MovieGenre';
import MovieTitle from './pages/movie-title/MovieTitle';
import Result from './pages/result/Result';

function App() {
  const quizCurrentStep = useAppSelector((state) => state.quiz.currentStep);

  return (
    <section className='quiz-wrapper'>
      {quizCurrentStep === 0 && <MovieGenre />}
      {quizCurrentStep === 1 && <MovieTitle />}
      {quizCurrentStep === 2 && <Result />}
    </section>
  );
}

export default App;
