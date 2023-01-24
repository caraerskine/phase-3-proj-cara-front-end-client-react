import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />


          </Routes>
        </div>
    </Router>
  );
}

export default App;
