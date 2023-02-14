import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Artists from './components/Artists';
import Paintings from './components/Paintings';
import PaintingForm from './components/PaintingForm';
import ArtistForm from './components/ArtistForm';
import ArtistPaintings from './components/ArtistPaintings';


function App() {

  //state triggers a re-render

  const [artists, setArtists] = useState ([])

  const [artistId, setArtistId] = useState(1)

  const [paintings, setPaintings] = useState ([])

  const API = 'http://localhost:9292'

 
  useEffect(() => {
    fetch(`${API}/paintings`)
    .then(res => res.json())
    .then(data => {
      setPaintings(data)
    })  
}, [])


  useEffect(() => {
    fetch(`${API}/artists`)
    .then(res => res.json())
    .then(data => {
      setArtists(data)
    })    
}, [])

// console.log(artists)

  //when i mount the artist, use effect makes the GET request to the back end,
    //gets all the artists, sticks them in state, the second they're in state
    //react "reacts" to it and map through it and make an artist link out of each one
    //stick it in a new array and render it on the page

    //i need to update state to reflect what is shown in /artists/:id/paintings

        //upon mount grab the artists and set in state

  function onDelete(deletedPainting) {
          const updatedPaintings = paintings.filter((p) => p.id !== deletedPainting.id)
          setPaintings(updatedPaintings)

          const updatedArtists = artists.map((a) => {       
            if (a.id === deletedPainting.artist_id) {
              return {
                ...a, 
                paintings: a.paintings.filter((p) => p.id !== deletedPainting.id)
              }  
            }  else {
              return a 
            }
          } )
            setArtists(updatedArtists)

  }

    function onAddPainting(newPainting) {
      setPaintings((currentPaintings) => [...currentPaintings, newPainting])
        const updatedArtistPaintings = artists.map((a) => {
          if (a.id === newPainting.artist_id){
            return {
              ...a, 
              paintings: [...a.paintings, newPainting]
            }
          } else {
            return a
          }
        })
      setArtists(updatedArtistPaintings)  
  }

    function onAddArtist(data) {
      setArtists((currentArtists) => [...currentArtists, data])
  }

    function handleLikePainting(updatedPainting) {
      console.log(updatedPainting)
      const updatedPaintings = paintings.map((p) => {
        if (p.id === updatedPainting.id) {
          return updatedPainting
        } else {
          return p 
        } 
     })
      setPaintings(updatedPaintings)
  }
  
  return (
    <Router>
      <Navigation />
        <div className="App">
          <Routes>

            <Route path="/" element={<Home />} />
            
            <Route path="/artists" element={<Artists artists={artists} setArtistId={setArtistId} />} /> 

            <Route path="/artists/:artist_id/paintings" element={<ArtistPaintings artists={artists} />} />
             
            <Route path="/paintings" element={<Paintings onDelete={onDelete} paintings={paintings} handleLikePainting={handleLikePainting}/> } /> 

            <Route path="/artists/:artist_id/paintings/new" element={<PaintingForm onAddPainting={onAddPainting} />} />

            <Route path="/artists/:artist_id/artists/new" element={<ArtistForm onAddArtist={onAddArtist} />} />

          </Routes>
        </div>
    </Router>
  );
}

export default App;

