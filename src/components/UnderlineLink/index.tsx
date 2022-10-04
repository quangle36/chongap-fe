import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  to: string;
}
const UnderlineLink = (props: Props) => {
  const { children, to } = props;
  return (
    <Link
      to={to}
      className='group inline-block hover:bg-white active:bg-white font-medium text-base '
    >
      {children}
      <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600'></span>
    </Link>
  );
};

export default UnderlineLink;
