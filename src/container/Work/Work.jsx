import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

import { images } from '../../constants';




const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">Projects & <span>Portfolio</span></h2>
      <br></br>
      <br></br>
      <div>
      
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
      <h3 align="center">Task Tracker App</h3>
      <a href="https://tasktracker-delta.vercel.app/" target='_blank' rel="noreferrer">
      <img src={images.tasktracker} alt='Task Tracker' height={150} width={300} className="portfolio_images">
      </img>
      </a>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
      <h3 align="center">Online Audio Store</h3>
      <a href="https://ecommerce-kfp1f1px0-richardly9319.vercel.app/" target='_blank' rel="noreferrer">
      <img src={images.ecommercesite} alt='E-Commerce' height={150} width={300} className="portfolio_images">
      </img>
      </a>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
      <h3 align="center">Real Estate Listings</h3>
      <a href="https://rly-realestate-hhct9hgqh-richardly9319.vercel.app/" target='_blank' rel="noreferrer">
      <img src={images.realestatesite} alt='Real estate site' height={150} width={300} className="portfolio_images">
      </img>
      </ a>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
      <h3 align="center">Porfolio Website</h3>
      <a href="http://localhost:3000/" target='_blank' rel="noreferrer">
      <img src={images.portfoliosite} alt='Portfolio' height={150} width={300} className="portfolio_images">
      </img>
      </a>
      </motion.div>
      </div>

      
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);