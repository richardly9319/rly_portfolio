import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

import { images } from '../../constants';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h3 className="head-text">Education & Certifications</h3>

      <div className="app__profiles">
        
          <div
            className="app__profile-item"
          >
            <img src={images.coursera} alt='coursera' />
            <h2 className="bold-text" style={{ marginTop: 20 }}>DeepLearning.AI TensorFlow Developer Specialization</h2>
            <p className="education_desc" style={{ marginTop: 10 }}>Issued - August 2020</p>
          </div>

          <div
            className="app__profile-item"
            
          >
            <img src={images.ubc} alt='ubc' />
            <h2 className="bold-text" style={{ marginTop: 20 }}>B.Sc. in Mathematics and Computer Science</h2>
            <br></br>
            <p className="education_desc" style={{ marginTop: 10 }}>(Incomplete) 2011-2014</p>
          </div>
        
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);