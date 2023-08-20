import './MobileMenu.scss';
import '../../Utils/Util.css';

export const MobileMenu = () => {
  return (
    <div className='mobileMenu'>
      <ul >
        <li><a href="#home">Home </a></li>
        <li><a href="#TheProblem">TheProblem</a></li>
        <li><a href="#solution">Our Solution</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#technology">Technology</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contactus">ContactUs</a></li>
      </ul>
    </div>
  )
}