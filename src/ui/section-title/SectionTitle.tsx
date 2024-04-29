import { ReactNode } from 'react';
import './styles.scss';

interface TitleProps {
  children?: ReactNode;
}
function SectionTitle({ children }: TitleProps) {
  return <h1 className='section-title'>{children}</h1>;
}

export default SectionTitle;
