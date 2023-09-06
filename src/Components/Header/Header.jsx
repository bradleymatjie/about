import { memo, useState } from 'react';
import './Header.scss';
import logo from '../../bx-web-assets/svgs/bx_horizontal_logo_dark.svg';

export const Header = memo(({ menuTogglerFunction, menuTogglerValue }) => {
  const [activeMenuItem, setActiveMenuItem] = useState('home');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };


 return (
  <header className='header'>
    <a href="#home">
      <img src={logo} alt="logo" />
    </a>

    <nav>
      <ul className='header-navItems'>
      <li>
            <a
              href="#home"
              className={activeMenuItem === 'home' ? 'active' : ''}
              onClick={() => handleMenuItemClick('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#TheProblem"
              className={activeMenuItem === 'TheProblem' ? 'active' : ''}
              onClick={() => handleMenuItemClick('TheProblem')}
            >
              The Problem
            </a>
          </li>

          <li>
            <a
              href="#solution"
              className={activeMenuItem === 'solution' ? 'active' : ''}
              onClick={() => handleMenuItemClick('solution')}
            >
              Our Solution
            </a>
          </li>

        <li>
          <a 
            href="#features"
            className={activeMenuItem === 'features' ? 'active' : ''}
            onClick={() => handleMenuItemClick('features')}
            
          >
            Features
          </a>
        </li>
        <li>
          <a 
            href="#technology"
            className={activeMenuItem === 'technology' ? 'active' : ''}
            onClick={() => handleMenuItemClick('technology')}  
          >
            Technology
          </a>
        </li>
        <li>
          <a 
            href="#team"
            className={activeMenuItem === 'team' ? 'active' : ''}
            onClick={() => handleMenuItemClick('team')}
            
          >
            Team
          </a>
        </li>
        <li>
          <a 
          href="#contactus"
            className={activeMenuItem === 'contactus' ? 'active' : ''}
            onClick={() => handleMenuItemClick('contactus')}
          >
            ContactUs
          </a>
        </li>
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