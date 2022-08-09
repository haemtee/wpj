import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarKu from "./components/Navbar";
import Product from './pages/Product';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarKu />
        <Routes>
          <Route path='/' element={ <Home />} /> 
          <Route path='/product' element={ <Product />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
