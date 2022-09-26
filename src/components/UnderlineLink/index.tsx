import React from 'react';

interface Props {
  title: string;
}
const UnderlineLink = (props: Props) => {
  const { title } = props;
  return (
    <span className='group transition duration-300 inline-block hover:bg-white active:bg-white font-medium text-base '>
      {title}
      <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600'></span>
    </span>
  );
};

export default UnderlineLink;
