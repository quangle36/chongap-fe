import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  title: string;
  children?: React.ReactNode;
  onToggleActive?: () => void;
  active?: boolean;
}

const Accordion = ({ title, children, onToggleActive, active }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div>
      <AnimatePresence>
        <motion.div
          key='question'
          className={twMerge(
            `rounded-tr-md relative z-20  rounded-br-md  px-4 py-1 mt-4 min-w-[210px] border-l-4 ${
              active ? ' border-main-blue' : 'border-white'
            } cursor-pointer`
          )}
          onClick={() => {
            setIsOpen(!isOpen);
            onToggleActive && onToggleActive();
          }}
        >
          <motion.div className='text-lg font-bold'>{title}</motion.div>
        </motion.div>

        {isOpen && (
          <motion.div
            key='answer'
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{ opacity: 0 }}
            className='p-2 text-lg text-gray-700  border-gray-300'
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
