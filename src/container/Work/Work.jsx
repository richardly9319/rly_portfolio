import React from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';

import './Work.scss';

import { images } from '../../constants';




const Work = () => {
  

  

  return (
    <>
      <h2 className="head-text">Project <span>Portfolio</span></h2>
      <br></br>
      <br></br>
      <div>
      
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
      <h3 align="center">Task Tracker App</h3>
      <a href="https://tasktracker-delta.vercel.app/" target='_blank' rel="noreferrer">
      <img src={images.tasktracker} alt='Task Tracker' height={180} width={320} className="portfolio_images">
      </img>
      </a>
      </motion.div>
      <br></br>

      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
      <h3 align="center">E-Commerce Store</h3>
      <a href="https://ecommerce-kfp1f1px0-richardly9319.vercel.app/" target='_blank' rel="noreferrer">
      <img src={images.ecommercesite} alt='E-Commerce' height={180} width={320} className="portfolio_images">
      </img>
      </a>
      </motion.div>
      <br></br>

      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
      <h3 align="center">Real Estate Listings from API</h3>
      <a href="https://rly-realestate-hhct9hgqh-richardly9319.vercel.app/" target='_blank' rel="noreferrer">
      <img src={images.realestatesite} alt='Real estate site' height={180} width={320} className="portfolio_images">
      </img>
      </ a>
      </motion.div>
      <br></br>

      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
      <h3 align="center">Portfolio Website</h3>
      <a href="http://localhost:3000/" target='_blank' rel="noreferrer">
      <img src={images.portfoliosite} alt='Portfolio' height={180} width={320} className="portfolio_images">
      </img>
      </a>
      </motion.div>
      </div>

      
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'portfolio',
  'app__primarybg',
);