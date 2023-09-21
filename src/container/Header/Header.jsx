import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Header.scss';

const Header = () => (

    <div>
        
        <img src={images.background} className="background_image"></img>

        <h1 className="header_title" >Sales Professional turned Software Developer</h1>

        <img src={images.javascriptlogo} className="header_image1"></img>
        
        <img src={images.reacticon} className="header_image2"></img>

        <img src={images.pythonlogo} className="header_image3"></img>
        
    </div>

)

export default Header