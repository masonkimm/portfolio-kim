import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';

import { Link } from 'react-scroll';
import ProjectPage from './components/ProjectPage';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="app__body">
        <LandingPage />
        <About />

        <ProjectPage />
        <Contact />
      </div>
      <Footer />

      <Link to="landingPage" smooth={true}>
        <img src={logo} className="app-logo" alt="logo" />
      </Link>
    </div>
  );
}

export default App;
