import './Header.css';
import logo from '../../bx-web-assets/svgs/bx_horizontal_logo_dark.svg';

export const Header = () => {
    return (
        <header>
            <img src={logo} className="logo" alt="logo" />
            
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