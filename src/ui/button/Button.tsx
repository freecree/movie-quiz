import { ReactNode } from 'react';
import './styles.scss';

interface ButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}
function Button({ children, ...restProps }: ButtonProps) {
  return (
    <button className='button' {...restProps}>
      {children}
    </button>
  );
}

export default Button;
