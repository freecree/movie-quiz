import './styles.scss';
import BackImage from '../../assets/back.svg';
import MenuImage from '../../assets/menu.svg';
import { getProgressPersentage, hasPrev } from '../../utils/quizUtils';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { stepBack } from '../../slices/quizSlice';

function Header() {
  const quizCurrentStep = useAppSelector((state) => state.quiz.currentStep);
  const dispatch = useAppDispatch();

  const handleBackClick = () => {
    dispatch(stepBack());
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__bar'>
          <button
            disabled={!hasPrev(quizCurrentStep)}
            onClick={handleBackClick}
            className='header__back'
          >
            <img src={BackImage} alt='back' />
          </button>
          <div className='header__bar-right'>
            <div>{getProgressPersentage(quizCurrentStep)}%</div>
            <img src={MenuImage} alt='menu' />
          </div>
        </div>
        <div className='progress-bar'>
          <div
            style={{ width: `${getProgressPersentage(quizCurrentStep)}%` }}
            className='progress-bar__filled'
          ></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
