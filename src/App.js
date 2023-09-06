import { useState } from 'react';
import './App.css';
import { data } from './sliderData';
import { Home } from './Pages/Home/Home';
import { Header } from './Components/Header/Header';
import { TheProblem } from './Pages/TheProblem/TheProblem';
import { MobileMenu } from './Components/MobileMenu/MobileMenu';


function App() {
  const [menuToggler, setMenuToggler] = useState(false);
  const [ slideData ] = useState([...data]);

  const removeMenu = () => {
    setMenuToggler(prev => false);
  }


  return (
    <div className="App">
      <Header 
        menuTogglerFunction={setMenuToggler} 
        menuTogglerValue={menuToggler} 
      />
      <MobileMenu removeMenu={removeMenu} menuToggler={menuToggler} />
      <Home data={ [ ...slideData ] } />
      <TheProblem />
    </div>
  );
}

export default App;
