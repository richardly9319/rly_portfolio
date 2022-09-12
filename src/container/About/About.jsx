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
        
          <p className="about_me">Entrepreneur and sales professional with academic history in Computer Science </p>
          <p className="about_me"> 
            Passionate about technology and its applications to society </p>
          <p className="about_me">Curiosity-driven and skilled in problem-solving </p>
        
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);