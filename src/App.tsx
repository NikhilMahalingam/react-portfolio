import './App.css'
import Nav from './components/Nav'
import LandingPage from './pages/LandingPage';
import About from './pages/About'
import Projects from './pages/Projects';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<LandingPage firstName="Nikhil" lastName="Mahalingam"/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Projects' element={<Projects/>}/>
      </Routes>


    </Router>
  </>
  )
}

export default App
