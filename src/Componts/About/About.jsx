import './About.css';
import '../../Utils/Util.css';
import ProgressBar from "@ramonak/react-progress-bar";

import image from '../../media/About BiznesXpo_1.png';
import svgWave1 from '../../bx-web-assets/svgs/Wave1.svg';
import stripe from '../../bx-web-assets/svgs/yellow-strip-1.svg';
import darkstripe from '../../bx-web-assets/svgs/dark-grey-strip-1.svg';

export const About = () => {
    return (
        <section>
            <div className="about">
                <div className="image">
                    <img src={image} alt="logo" />
                    <div className='second'></div>
                    <div className='back'></div>
                </div>

                <div className="text">
                    <h1>
                        Next-generation <br/>social plartform <br/>for small businesses
                    </h1>
                    <p>
                        BiznesXpo provides a digital office for 
                        small businesses <br/>to brand, find more customers & 
                        network. Anytime. Anywhere. Free!
                    </p>
                </div>
            </div>

            <div className='pro'>
                <ProgressBar className='progress1' completed={50} bgColor="grey" animateOnRender={true} isLabelVisible={false} />
                <ProgressBar className='progress' completed={0} bgColor="grey" animateOnRender={true} />
                <ProgressBar className='progress' completed={0} bgColor="grey" animateOnRender={true} />
                <ProgressBar className='progress' completed={0} bgColor="grey" animateOnRender={true} />
                <ProgressBar className='progress' completed={0} bgColor="grey" animateOnRender={true} />
            </div>

            <h2 className='improving_odds'>
                We are <br/>improving the odds <br/><span>of success for <br/>small businesses.</span>
            </h2>
            {/* background lines */}
            <img src={svgWave1} className='wave1' alt="waves1"/>
            {/* yellow-strip */}
            <img src={stripe} className='stripe' alt="stripe" />

            {/* dark grey stripe */}
            <img src={darkstripe} className='darkstripe' alt="stripe" />
        </section>
    );
}