
import { memo } from 'react';
import './Header.scss';
import logo from '../../bx-web-assets/svgs/bx_horizontal_logo_dark.svg';
import { NavLink } from 'react-router-dom';

export const Header = memo(({ menuTogglerFunction, menuTogglerValue }) => {
 return (
  <header className='header'>
    <img src={logo} alt="logo" />

    <nav>
      <ul className='header-navItems'>
        <li><NavLink to="/">Home </NavLink></li>
        <li><NavLink to="/TheProblem">TheProblem</NavLink></li>
        <li><NavLink to="/solution">Our Solution</NavLink></li>
        <li><NavLink to="/features">Features</NavLink></li>
        <li><NavLink to="/technology">Technology</NavLink></li>
        <li><NavLink to="/team">Team</NavLink></li>
        <li><NavLink to="/contactus">ContactUs</NavLink></li>
      </ul>
    </nav>

    <div 
      className={`toggle ${menuTogglerValue ? "active" : ""}`}
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