import './App.css';
import NavBar from './components/NavBar';
import ProductosList from './components/productos/ProductosList';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carrito from './components/Carrito';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<ProductosList/>}/>
        <Route exact path='/carrito' element={<Carrito/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}


export default App;
