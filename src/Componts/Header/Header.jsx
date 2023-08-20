
import { memo } from 'react';
import './Header.scss';
import logo from '../../bx-web-assets/svgs/bx_horizontal_logo_dark.svg';

export const Header = memo(({ menuTogglerFunction, menuTogglerValue }) => {
 return (
  <header className='header'>
    <img src={logo} alt="logo" />

    <nav>
      <ul className='header-navItems'>
        <li><a href="#home">Home </a></li>
        <li><a href="#TheProblem">TheProblem</a></li>
        <li><a href="#solution">Our Solution</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#technology">Technology</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contactus">ContactUs</a></li>
      </ul>
    </nav>

    <div 
      className={`toggle ${menuTogglerValue ? "toggled" : ""}`}
      onClick={() => {
        menuTogglerFunction((state) => (!state))
      }}
    >
      
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
 ) 
})