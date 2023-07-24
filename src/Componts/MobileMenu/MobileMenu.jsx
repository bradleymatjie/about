import { memo } from 'react';
import './MobileMenu.scss';

export const MobileMenu = memo(() => {
  return (
    <div className='mobileMenu'>
      <ul >
        <li>Home</li>
        <li>TheProblem</li>
        <li>Our Solution</li>
        <li>Features</li>
        <li>Technology</li>
        <li>Team</li>
        <li>ContactUs</li>
      </ul>
    </div>
  )
})