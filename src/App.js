import './App.css';
import NavBar from './components/NavBar';
import Saludo from './components/Saludo';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Saludo userName={"Enzo"}/>
    </div>
  );
}

export default App;
