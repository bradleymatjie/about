import { useState } from 'react';
import './App.css';
import './Utils/Util.css';
import { Home } from './Componts/About/Home';
import { Header } from './Componts/Header/Header';
import { TheProblem } from './Componts/TheProblem/TheProblem';
import { MobileMenu } from './Componts/MobileMenu/MobileMenu';
import { Route, Routes } from 'react-router-dom';



function App() {
  const [menuToggler, setMenuToggler] = useState(false);

  return (
    <div className="App">
      <Header 
        menuTogglerFunction={setMenuToggler} 
        menuTogglerValue={menuToggler} 
      />
      {menuToggler && <MobileMenu />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/TheProblem' element={<TheProblem />} />
      </Routes>
      {/* <Home /> */}
      {/* <TheProblem /> */}
    </div>
  );
}

export default App;
