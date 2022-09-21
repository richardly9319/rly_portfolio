import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Education.scss';


import { images } from '../../constants';

const Education = () => {
  

  return (
    <>
      <h3 className="head-text">Education & Certifications</h3>

      <div className="app__profiles">


           <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            
            >
            
            <a href="https://www.cs.ubc.ca/" target='_blank' rel="noreferrer" className="education_links">
            <img src={images.ubc} alt='ubc' />
            <h2 className="bold-text" style={{ marginTop: 20 }}>B.Sc. in Mathematics and Computer Science</h2>
            </a>
            <br></br>
            <p className="education_desc" style={{ marginTop: 10 }}>(Incomplete) 2011-2014</p>
          </motion.div>
        
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
          >
            <a href="https://www.coursera.org/account/accomplishments/professional-cert/ECEPS2J9F7TE" target='_blank' rel="noreferrer" className="education_links">
            <img src={images.deeplearning} alt='deeplearning' />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              
                DeepLearning.AI: TensorFlow Developer Specialization
              
              </h2>
              </a>
            <p className="education_desc" style={{ marginTop: 10 }}>Issued - August 2020</p>
          </motion.div>

      

          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            
          >
            
            <a href="https://www.coursera.org/account/accomplishments/verify/B5JKUV9FDA45" target='_blank' rel="noreferrer" className="education_links">
            <img src={images.meta} alt='ubc' />
            <h2 className="bold-text" style={{ marginTop: 20 }}>Introduction to <br/>Front-End Development</h2>
            </a>
            <br></br>
            <p className="education_desc" style={{ marginTop: 10 }}>Issued - August 2022</p>
          </motion.div>


        
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Education, 'app__about'),
  'education',
  'app__whitebg',
);