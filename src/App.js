import './App.css';
import { About } from './Componts/About/About';
import { Header } from './Componts/Header/Header';
import { TheProblem } from './Componts/TheProblem/TheProblem';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <TheProblem />
    </div>
  );
}

export default App;
