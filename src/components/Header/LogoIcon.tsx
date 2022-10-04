import { Logo } from 'assets/images';
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}

const LogoIcon = (props: Props) => {
  return (
    <Link to='/'>
      <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <img
          className={`h-14 w-18 lg:h-18 lg:w-22 ${props.className}`}
          src={Logo}
        />
      </motion.a>
    </Link>
  );
};

export default LogoIcon;
