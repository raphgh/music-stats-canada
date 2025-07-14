import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Analysis from './Analysis';
import About from './About';
import Contact from './Contact';
import SurveyProgram from './SurveyProgram';

function App() {
  return (
    <Router basename="/music-stats-canada">
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/surveyprogram" element={<SurveyProgram />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
