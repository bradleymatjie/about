import { useState } from 'react';
import './App.css';
import './Utils/Util.css';
import { Home } from './Componts/About/Home';
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
      <Home />
      {/* <TheProblem /> */}
    </div>
  );
}

export default App;
