import './Header.css';
import logo from '../../media/logo.jpg';

export const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo" />
                <h2>biznes<span>xpo</span></h2>
            </div>
            
            <nav>
                <ul>
                    <li>Home</li>
                    <li>The Problem</li>
                    <li>Our Solution</li>
                    <li>Features</li>
                    <li>Technology</li>
                    <li>Teams</li>
                    <li>ContactUs</li>
                </ul>
            </nav>
        </header>
    );
}