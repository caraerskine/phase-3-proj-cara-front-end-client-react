import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Artist from './components/Artist';
import Artists from './components/Artists';
import Paintings from './components/Paintings';
import PaintingForm from './components/PaintingForm';
import Painting from './components/Painting';




function App() {

  const [artists, setArtists] = useState ([])

  const [paintings, setPaintings] = useState (null)

  const API = 'http://localhost:9292'

  useEffect(() => {
      fetch(`${API}/paintings`)
      .then(res => res.json())
      .then(data => setPaintings(data))    
  }, [])

  //when i mount the artist, use effect makes the GET request to the back end,
    //gets all the artists, sticks them in state, the second they're in state
    //react "reacts" to it and map through it and make an artist link out of each one
    //stick it in a new array and render it on the page

        //upon mount grab the artists and set in state

  function onAddPainting(data) {
    setPaintings((currentPaintings) => [...currentPaintings, data])      
  }


    useEffect(() => {
        fetch(`${API}/artists`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setArtists(data)
        })    
    }, [])

    console.log(paintings)

  
  return (
    <Router>
      <Navigation />
        <div className="App">
          <Routes>

            <Route path="/" element={<Home />} />
            
            <Route path="/artists" element={<Artists artists={artists} />} /> 

            <Route path="/artists/:id" element={<Artist />} /> 
             
            <Route path="/paintings" element={<Paintings artists={artists} paintings={paintings}/> } /> 

            <Route path="artists/:id/add-painting" element={<PaintingForm onAddPainting={onAddPainting} />} />

            <Route path="/paintings/:id" element={<Paintings artists={artists} paintings={paintings}/>} />

          </Routes>
        </div>
    </Router>
  );
}

export default App;


/* <Route path="/painting" element={<Painting />} /> */