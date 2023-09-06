import './TheProblem.scss';

import failLogo from '../../bx-web-assets/svgs/business-man-fail.svg';
import covid from '../../bx-web-assets/svgs/virus-1.svg';
import bottomImage from '../../media/bottom.png';
import leftWaves from '../../bx-web-assets/svgs/light-grey-strip-1.svg';

export const TheProblem = () => {
    return (
        <section className='TheProblem' id='TheProblem'>
            <h4>THE PROBLEM</h4>
            <div>
                <div className='image_container'>
                    <img src={failLogo} alt="fail logo" />
                </div>

                <h3>More than</h3>
                
                <div>
                    <h1>9 out of every 10</h1>
                    <p>business starting today will be out of business within the next five years</p>
                </div>
                <div>
                    <h1>5 out of every 10</h1>
                    <p>business starting today will be out of business within the next one year</p>
                </div>
            </div>

            <div className='covid'>
                <div className='image_container'>
                    <img src={covid} alt="covid logo" />
                </div>
                <p>The Covid-19 pandemic made it crucial that if any business, including small businesses, is going to survive, 
                    they have got to know how to
                </p>
                <h2>move most of their<br/> daily business activities and assets online.</h2>
            </div>
            {/* small stripe */}
            <img src={leftWaves} id='wave3' alt="waves3" />

            <div className='bottom' style={{backgroundImage: `url(${bottomImage})`}}></div>
        </section>
    );
}