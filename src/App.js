import './App.css';
import { Routes, Route, useLocation } from "react-router-dom"
import ParticlesComponent from './utils/particles';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './component/navbar';

function App() {
  const location = useLocation();
  const renderParticle = location.pathname === "/"
  return (
    <div className="App">
    {
      renderParticle &&
      <ParticlesComponent id='particles' />
    }
    <Navbar />
    <div className='App_main-container'>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route index path='/about' element={<About />} />
        <Route index path='/resume' element={<Resume />} />
        <Route index path='/skills' element={<Skills />} />
        <Route index path='/portfolio' element={<Portfolio />} />
        <Route index path='/contact' element={<Contact />} />
      </Routes>
    </div>

  </div>
  );
}

export default App;
