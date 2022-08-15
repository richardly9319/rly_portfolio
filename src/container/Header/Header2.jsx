import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Header.scss';

const Header2 = () => (

    <div>
        
        <img src={images.background} className="background_image"></img>

        <h1 className="header_title p-text" >Aspiring Web Developer</h1>

        <img src={images.javascriptlogo} className="header_image1"></img>
        
        <img src={images.reacticon} className="header_image2"></img>

        <img src={images.pythonlogo} className="header_image3"></img>
        
    </div>

)

export default Header2