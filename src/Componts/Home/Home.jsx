import './Home.scss';
import '../../Utils/Util.css';

import firstImage from '../../media/first.png';
import secondImage from '../../media/second.jpg';
import thirdImage from '../../media/third.jpg';
import svgWave1 from '../../bx-web-assets/svgs/Wave1.svg';
import stripe from '../../bx-web-assets/svgs/yellow-strip-1.svg';
import darkstripe from '../../bx-web-assets/svgs/dark-grey-strip-1.svg';
import { useState } from 'react';

export const Home = () => {
    const [firstToggled, setFirstToggled] = useState(true);
    const [secondToggled, setSecondToggled] = useState(false);
    const [thirdToggled, setThirdToggled] = useState(false);
    const [FourthToggled, setFourthToggled] = useState(false);
    const [FifthToggled, setFifthToggled] = useState(false);

    const [slideText, setSlideText] = useState(`Next-generation Social platform for small business`); 

    const FirstSlide = () => {
        setFirstToggled(prev => true);

        setSecondToggled(prev => false);
        setThirdToggled(prev => false);
        setFourthToggled(prev => false);
        setFifthToggled(prev => false);

        setSlideText(prev => `Next-generation Social platform for small business`);
    }

    const secondSlide = () => {
        setSecondToggled(prev => true);

        setFirstToggled(prev => false);
        setThirdToggled(prev => false);
        setFourthToggled(prev => false);
        setFifthToggled(prev => false);

        setSlideText(prev => `Create your brand's digital office!`);
    }

    const ThirdSlide = () => {
        setThirdToggled(prev => true);

        setFirstToggled(prev => false);
        setSecondToggled(prev => false);
        setFourthToggled(prev => false);
        setFifthToggled(prev => false);
        setSlideText(prev => ` find solutions that help your business grow everyday`);
    }

    const FourthSlide = () => {
        setFourthToggled(prev => true);

        setFirstToggled(prev => false);
        setSecondToggled(prev => false);
        setThirdToggled(prev => false);
        setFifthToggled(prev => false);
    }

    const FifthSlide = () => {
        setFifthToggled(prev => true);

        setFirstToggled(prev => false);
        setSecondToggled(prev => false);
        setThirdToggled(prev => false);
        setFourthToggled(prev => false);
    }

    return (
        <section className='home'>
            <div className='home-hero'>
                <div className="images-container">
                    <div className={`first ${firstToggled ? 'toggled': ''}`} style={{backgroundImage: `url(${firstToggled && firstImage})`}}></div>
                    <div className={`second ${secondToggled ? 'toggled': ''}`} style={{backgroundImage: `url(${secondToggled && secondImage})`}}></div>
                    <div className={`third ${thirdToggled ? 'toggled': ''}`} style={{backgroundImage: `url(${thirdToggled && thirdImage})`}}></div>
                </div>
                
                <div className='home-hero_text'>
                    <h2>{slideText}</h2>
                    <p>BiznesXpo provides a digital office for small businesses to brand, find more customers & network. Anytime. Anywhere. Free!</p>
                </div>
            </div>
            
            <div className='progressBars'>
                <div className={`${firstToggled ? 'active': ''}`} onClick={FirstSlide}></div>
                <div className={`${secondToggled ? 'active': ''}`} onClick={secondSlide}></div>
                <div className={`${thirdToggled ? 'active': ''}`} onClick={ThirdSlide}></div>
                <div className={`${FourthToggled ? 'active': ''}`} onClick={FourthSlide}></div>
                <div className={`${FifthToggled ? 'active': ''}`} onClick={FifthSlide}></div>
            </div>

            <h1>
                We are<br/> improving the odds<br/> <span>of Success for <br/>small businesses.</span>
            </h1>
            {/* background lines */}
            <img src={svgWave1} className='wave1' alt="waves1"/>
            
            {/* yellow-strip */}
            <img src={stripe} className='stripe' alt="stripe" />

            {/* dark grey stripe */}
            <img src={darkstripe} className='darkstripe' alt="stripe" />
        </section>
    );
}