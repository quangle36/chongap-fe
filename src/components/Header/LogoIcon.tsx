import { motion } from 'framer-motion';
import React from 'react';

interface Props {
  className?: string;
}

const LogoIcon = (props: Props) => {
  return (
    <motion.a href='/' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <img
        className={`h-14 w-18 lg:h-18 lg:w-22 ${props.className}`}
        src='src/assets/images/Van-Phuc-Land-Header.png'
      />
    </motion.a>
  );
};

export default LogoIcon;
