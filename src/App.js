import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import ProjectPage from './components/ProjectPage/ProjectPage';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Link } from 'react-scroll';

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
