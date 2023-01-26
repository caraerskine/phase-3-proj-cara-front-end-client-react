import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Artist from './components/Artist';
import Artists from './components/Artists';
import ArtistLink from './components/ArtistLink';
import Paintings from './components/Paintings';
import Painting from './components/Painting';
import PaintingLink from './components/PaintingLink';
// import PaintingForm from './components/PaintingForm';

function App() {
  return (
    <Router>
      <Navigation />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/artists" element={<Artists />} /> 

            <Route path="/artists/:id" element={<Artist />} /> 

            <Route path="/paintings" element={<Paintings />} /> 

           
          </Routes>
        </div>
    </Router>
  );
}

export default App;


/* <Route path="/painting" element={<Painting />} /> */