import { useState } from 'react';
import { motion } from 'framer-motion';
import './home.scss';
import wave from '../../bx-web-assets/svgs/Wave1.svg';
import yellowstripe from '../../bx-web-assets/svgs/yellow-strip-1.svg';
import greystripe from '../../bx-web-assets/svgs/dark-grey-strip-1.svg';

export const Home = ({ data }) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [activNav, setActivNav] = useState(0);
  const [nextNav, setNextNav] = useState(1); 
  const [showSecondDiv, setShowSecondDiv] = useState(true);
  const [showThirdDiv, setShowThirdDiv] = useState(true);
  const [showFourthDiv, setShowFourthDiv] = useState(true);

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
    setActivNav(index);

    setNextNav((index + 1) % data.length);

    if (index >= data.length - 3) {
      setShowFourthDiv(false);
    } else {
      setShowFourthDiv(true);
    }

    if (index >= data.length - 2) {
      setShowThirdDiv(false);
    } else {
      setShowThirdDiv(true);
    }

    if (index >= data.length - 1) {
      setShowSecondDiv(false);
    } else {
      setShowSecondDiv(true);
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <div className="home" id="home" style={{backgroundImage: `url(${wave})`}}>
      <div className="main-area">
        <div className="image-section">
        <motion.img
            key={activNav}
            src={data[activNav].image}
            alt={`${data[activNav].title}`}
            loading="lazy"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          
          {showSecondDiv && (<motion.div
            key={nextNav}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="image-section-div second"
            style={{ backgroundImage: `url(${data[nextNav].image})` }}
          ></motion.div>)}

          {showThirdDiv && (<div className="image-section-div third"></div>)}

          {showFourthDiv && (<div className="image-section-div fourth"></div>)}
        </div>

        <div className="info-section">
          <motion.div
            key={data[activNav].title}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <h2>{data[activNav].title}</h2>
          </motion.div>

          <motion.div
            key={data[activNav].description}
            variants={textVariants} 
            initial="hidden"
            animate="visible"
          >
            <p>{data[activNav].description}</p>
          </motion.div>
          <a>
            Get Started
          </a>
        </div>
      </div>
      <nav className="nav-buttons">
        {data.map((v, i) => (
          <button
            className={i === activeButtonIndex ? 'active' : ''}
            key={i}
            onClick={() => handleButtonClick(i)}
          />
        ))}
      </nav>

      <img src={yellowstripe} alt='yellow stripe' className="yellowstripe" />
      <img src={greystripe} alt='dark grey stripe' className="greystripe" />
    </div>
  );
};
