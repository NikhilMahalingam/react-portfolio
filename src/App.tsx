import './App.css'
import Nav from './components/Nav'
import LandingPage from './pages/LandingPage';
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path='/react-portfolio' element={<LandingPage firstName="Nikhil" lastName="Mahalingam"/>}/>
        <Route path='/' element={<LandingPage firstName="Nikhil" lastName="Mahalingam"/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Experience' element={<Experience/>}/>
      </Routes>


    </Router>
  </>
  )
}

export default App
