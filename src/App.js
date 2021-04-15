import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import { Link, animateScroll as scroll } from 'react-scroll';

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="app__body">
        <LandingPage />
        <About />
      </div>
      <Footer />
      <Link to="landingPage" smooth={true}>
        <img src={logo} className="app-logo" alt="logo" />
      </Link>
    </div>
  );
}

export default App;
