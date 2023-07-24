import { useState } from 'react';
import './App.css';
import './Utils/Util.css';
import { About } from './Componts/About/About';
import { Header } from './Componts/Header/Header';
import { TheProblem } from './Componts/TheProblem/TheProblem';
import { MobileMenu } from './Componts/MobileMenu/MobileMenu';

function App() {
  const [menuToggler, setMenuToggler] = useState(false);

  return (
    <div className="App">
      <Header 
        menuTogglerFunction={setMenuToggler} 
        menuTogglerValue={menuToggler} 
      />
      {menuToggler && <MobileMenu />}
      {/* <About /> */}
      {/* <TheProblem /> */}
    </div>
  );
}

export default App;
