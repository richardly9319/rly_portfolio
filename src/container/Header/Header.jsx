import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
        <div className="tag-cmp app__flex">
          <p className="p-text">Aspiring Web Developer</p>
          
        </div>
      
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.javascriptlogo, images.reacticon, images.pythonlogo].map((circle, index) => (
        <motion.div className="circle-cmp app__flex" key={`circle-${index}`} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
          <img src={circle} alt="profile_bg" />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
// export default Header