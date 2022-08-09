import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarKu from "./components/Navbar";
import Product from './pages/Product';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarKu />
        <Routes>
          <Route path='/' element={ <Home />} /> 
          <Route path='/product' element={ <Product />} /> 
          <Route path='/about' element={ <About />} /> 
          <Route path='/contact' element={ <Contact />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
