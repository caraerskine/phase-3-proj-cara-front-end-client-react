import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
// import Artist from './components/Artist';
// import Artists from './components/Artists';
// import ArtistLink from './components/ArtistLink';
// import Paintings from './components/Paintings';
// import Painting from './components/Painting';
// import PaintingForm from './components/PaintingForm';

function App() {
  return (
    <Router>
      <Navigation />
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            
            <Route exact path="/artists" element={<Artists />} /> 

            {/* <Route path="/artists/:id" element={<Artist />} /> 

            <Route exact path="/paintings" element={<Paintings />} /> 

            <Route path="/painting" element={<Painting />} /> */} 
          
          </Routes>
        </div>
    </Router>
  );
}

export default App;
