import './Home.scss';
import '../../Utils/Util.css';

import firstImage from '../../media/first.png';
import svgWave1 from '../../bx-web-assets/svgs/Wave1.svg';
import stripe from '../../bx-web-assets/svgs/yellow-strip-1.svg';
import darkstripe from '../../bx-web-assets/svgs/dark-grey-strip-1.svg';

export const Home = () => {
    return (
        <section className='home'>
            <div className='home-hero'>
                <div className="images-container">
                    <div className='first' style={{backgroundImage: `url(${firstImage})`}}></div>
                    <div className='second'></div>
                    <div className='third'></div>
                </div>
                
                <div className='home-hero_text'>
                    <h2>Next-generation<br/>Social platform<br/>for small business </h2>
                    <p>BiznesXpo provides a digital office for small businesses to brand, find more customers & network. Anytime. Anywhere. Free!</p>
                </div>
            </div>
            
            <div className='progressBars'>
                <div className='barOne'></div>
                <div className='barTwo'></div>
                <div className='barThree'></div>
                <div className='barFour'></div>
                <div className='barFive'></div>
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