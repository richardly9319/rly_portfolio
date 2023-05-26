import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';


import { images } from '../../constants';

const About = () => {
  

  return (
    <>
      <h3 className="head-text">About Me</h3>

      <br></br>

      <div>
        
          <p className="about_me">Entrepreneur & sales professional with academic history in Computer Science </p>
          <p className="about_me"> 
            Self-motivated and curiosity driven </p>
          <p className="about_me"> Exceptional Problem-Solver </p>
        
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);