import React from 'react';
import { AiFillEye, AiFillGithub, AiOutlineGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';

import './Portfolio.scss';

import { images } from '../../constants';




const Portfolio = () => {
  

  

  return (
    <>
      <h2 className="head-text">Project <span>Portfolio</span></h2>
      <br></br>
      <br></br>
      <div className="projects">

      <a href="https://github.com/richardly9319/tasktracker" target='_blank' rel="noreferrer">
      <div className="github">
      <h3>Task Tracker App</h3>
      <AiOutlineGithub />
      </div>
      </a>
      
      
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
      <a href="https://tasktracker-delta.vercel.app/" target='_blank' rel="noreferrer">
      <img src={images.tasktracker} alt='Task Tracker' height={180} width={320} className="portfolio_images">
      </img>
      </a>
      </motion.div>
      <br></br>

      <a href="https://github.com/richardly9319/ecommerce" target='_blank' rel="noreferrer">
      <div className="github">
      <h3>E-Commerce Store</h3>
      <AiOutlineGithub />
      </div>
      </a>

      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
      <a href="https://ecommerce-kfp1f1px0-richardly9319.vercel.app/" target='_blank' rel="noreferrer">
      <img src={images.ecommercesite} alt='E-Commerce' height={180} width={320} className="portfolio_images">
      </img>
      </a>
      </motion.div>
      <br></br>

      <a href="https://github.com/richardly9319/rly_logistics" target='_blank' rel="noreferrer">
      <div className="github">
      <h3>Logistics Business Website</h3>
      <AiOutlineGithub />
      </div>
      </a>

      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
      <a href="https://rly-logistics.vercel.app/" target='_blank' rel="noreferrer">
      <img src={images.logisticssite} alt='logistics site' height={180} width={320} className="portfolio_images">
      </img>
      </a>
      </motion.div>
      <br></br>

      <a href="https://github.com/richardly9319/rly_realestate" target='_blank' rel="noreferrer">
      <div className="github">
      <h3>Real Estate Listings from API</h3>
      <AiOutlineGithub />
      </div>
      </a>

      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
      <a href="https://rly-realestate-ccsfsaxpy-richardly9319.vercel.app/" target='_blank' rel="noreferrer">
      <img src={images.realestatesite} alt='Real estate site' height={180} width={320} className="portfolio_images">
      </img>
      </ a>
      </motion.div>
      <br></br>

      <a href="https://github.com/richardly9319/rly_portfolio" target='_blank' rel="noreferrer">
      <div className="github">
      <h3>Portfolio Website</h3>
      <AiOutlineGithub />
      </div>
      </a>

      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
      <a href="https://rly-portfolio.vercel.app/" target='_blank' rel="noreferrer">
      <img src={images.portfoliosite} alt='Portfolio' height={180} width={320} className="portfolio_images">
      </img>
      </a>
      </motion.div>

      </div>

      
    </>
  );
};

export default AppWrap(
  MotionWrap(Portfolio, 'app__works'),
  'portfolio',
  'app__primarybg',
);