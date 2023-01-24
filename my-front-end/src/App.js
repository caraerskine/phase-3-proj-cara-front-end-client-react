import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Navigation />
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            
            <Route exact path="/artists" element={<Artists />} /> 
          
          </Routes>
        </div>
    </Router>
  );
}

export default App;
