import { memo } from 'react';
import './MobileMenu.scss';
import '../../Utils/Util.css';
import { NavLink } from 'react-router-dom';

export const MobileMenu = memo(() => {
  return (
    <div className='mobileMenu'>
      <ul >
        <li><NavLink to="/">Home </NavLink></li>
        <li><NavLink to="/TheProblem">TheProblem</NavLink></li>
        <li><NavLink to="/solution">Our Solution</NavLink></li>
        <li><NavLink to="/features">Features</NavLink></li>
        <li><NavLink to="/technology">Technology</NavLink></li>
        <li><NavLink to="/team">Team</NavLink></li>
        <li><NavLink to="/contactus">ContactUs</NavLink></li>
      </ul>
    </div>
  )
})