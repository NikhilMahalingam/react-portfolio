import './App.css'
import Nav from './components/Nav'
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Nav/>
      <LandingPage firstName="Nikhil" lastName="Mahalingam"/>
    </Router>

    </>
  )
}

export default App
