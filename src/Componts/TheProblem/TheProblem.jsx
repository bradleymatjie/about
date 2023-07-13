import './TheProblem.css';

import failLogo from '../../media/fail_logo.png';
import covid from '../../media/covid.png';

export const TheProblem = () => {
    return (
        <section className='TheProblem'>
            <h4>THE PROBLEM</h4>
            <div>
                <img src={failLogo} alt="fail logo" />
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
                <img src={covid} alt="covid logo" />
                <p>The covid-19 pandemic made it crucial that if any business, including small businesses, is going to survive, 
                    they have got to know how to
                </p>
                <h2>move most of their daily busisness activities and assets online.</h2>
            </div>
        </section>
    );
}