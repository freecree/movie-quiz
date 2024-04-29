import Checkbox from '../../ui/checkbox/Checkbox';
import './styles.scss';

interface IQuizRadioOption {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  label: string;
  value: string;
  id: string;
  emoji: string;
}

function QuizRadioOption({
  onChange,
  isChecked,
  label,
  value,
  id,
  emoji,
  ...restProps
}: IQuizRadioOption) {
  return (
    <label
      htmlFor={id}
      className={`quiz-option ${isChecked ? 'quiz-option_checked' : ''}`}
    >
      <div className='quiz-option__content'>
        <span className='quiz-option__emoji'>{emoji}</span>
        <span>{label}</span>
      </div>
      <Checkbox
        onChange={onChange}
        value={value}
        isChecked={isChecked}
        id={id}
        {...restProps}
      />
    </label>
  );
}

export default QuizRadioOption;
