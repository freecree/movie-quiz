import './styles.scss';

interface IInput {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  error?: string | null;
}
function Input({ value, onChange, error = null, ...restProps }: IInput) {
  return (
    <>
      <input
        className={error ? 'input input_error' : 'input'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...restProps}
        type='text'
      />
      {error ? <p className='input__error-text'>{error}</p> : ''}
    </>
  );
}

export default Input;
