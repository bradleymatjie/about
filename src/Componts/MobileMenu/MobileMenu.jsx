import './MobileMenu.scss';
import '../../Utils/Util.css';

export const MobileMenu = ({ removeMenu }) => {
  return (
    <div className='mobileMenu'>
      <ul >
        <li><a href="#home" onClick={removeMenu}>Home </a></li>
        <li><a href="#TheProblem" onClick={removeMenu}>TheProblem</a></li>
        <li><a href="#solution" onClick={removeMenu}>Our Solution</a></li>
        <li><a href="#features" onClick={removeMenu}>Features</a></li>
        <li><a href="#technology" onClick={removeMenu}>Technology</a></li>
        <li><a href="#team" onClick={removeMenu}>Team</a></li>
        <li><a href="#contactus" onClick={removeMenu}>ContactUs</a></li>
      </ul>
    </div>
  )
}