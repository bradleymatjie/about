import './About.css';
import ProgressBar from "@ramonak/react-progress-bar";

import image from '../../media/About BiznesXpo_1.png';

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
                        Next-generation social plartform for small businesses
                    </h1>
                    <p>
                        BiznesXpo provides a digital office for 
                        small businesses to brand, find more customers & 
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
        </section>
    );
}