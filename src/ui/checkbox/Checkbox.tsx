import './styles.scss';

interface ICheckbox {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  value: string;
  id: string;
}
function Checkbox({ isChecked, onChange, ...restProps }: ICheckbox) {
  return (
    <label className='checkbox-wrapper'>
      <input
        checked={isChecked}
        type='checkbox'
        onChange={onChange}
        {...restProps}
      />
      <span
        onClick={(event) => {
          event.stopPropagation();
        }}
        className='checkmark'
      ></span>
    </label>
  );
}

export default Checkbox;
