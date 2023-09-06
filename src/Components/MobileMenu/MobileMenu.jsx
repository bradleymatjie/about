import { useState } from 'react';
import './MobileMenu.scss';

export const MobileMenu = ({ removeMenu, menuToggler }) => {
  const [activeMenuItem, setActiveMenuItem] = useState('home');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className={`mobileMenu ${menuToggler ? 'open':''}`}>
      <ul className={`${menuToggler ? 'open':''}`}>
      <li>
            <a
              href="#home"
              className={activeMenuItem === 'home' ? 'active' : ''}
              onClick={() => {
                handleMenuItemClick('home')
                removeMenu();
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#TheProblem"
              className={activeMenuItem === 'TheProblem' ? 'active' : ''}
              onClick={() => {
                handleMenuItemClick('TheProblem');
                removeMenu();
              }}
            >
              The Problem
            </a>
          </li>

          <li>
            <a
              href="#solution"
              className={activeMenuItem === 'solution' ? 'active' : ''}
              onClick={() => {
                handleMenuItemClick('solution');
                removeMenu();
              }}
            >
              Our Solution
            </a>
          </li>

        <li>
          <a 
            href="#features"
            className={activeMenuItem === 'features' ? 'active' : ''}
            onClick={() => {
              handleMenuItemClick('features');
              removeMenu();
            }}
            
          >
            Features
          </a>
        </li>
        <li>
          <a 
            href="#technology"
            className={activeMenuItem === 'technology' ? 'active' : ''}
            onClick={() => {
              handleMenuItemClick('technology');
              removeMenu();
            }}  
          >
            Technology
          </a>
        </li>
        <li>
          <a 
            href="#team"
            className={activeMenuItem === 'team' ? 'active' : ''}
            onClick={() => {
              handleMenuItemClick('team');
              removeMenu();
            }}
          >
            Team
          </a>
        </li>
        <li>
          <a 
          href="#contactus"
            className={activeMenuItem === 'contactus' ? 'active' : ''}
            onClick={() => {
              handleMenuItemClick('contactus')
              removeMenu();
            }}
          >
            ContactUs
          </a>
        </li>
      </ul>
    </div>
  )
}