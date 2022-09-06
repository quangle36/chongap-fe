import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  href: string;
  title: string;
}
const UnderlineLink = (props: Props) => {
  const { href, title } = props;
  return (
    <Link
      className="group text-sky-600 transition duration-300 inline-block"
      to={href}
    >
      {title}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
    </Link>
  );
};

export default UnderlineLink;
