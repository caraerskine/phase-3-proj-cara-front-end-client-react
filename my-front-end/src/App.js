import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Artists from './components/Artists';
import Paintings from './components/Paintings';
import PaintingForm from './components/PaintingForm';
import ArtistPaintings from './components/ArtistPaintings';
import Tester from './components/Tester';


function App() {

 

  const [artists, setArtists] = useState ([])

  const [artistId, setArtistId] = useState(1)
  // console.log(artistId)

  const [paintings, setPaintings] = useState ([])


  const API = 'http://localhost:9292'

 
  useEffect(() => {
    fetch(`${API}/paintings`)
    .then(res => res.json())
    .then(data => {
      setPaintings(data)
    })  
}, [])

// console.log(artists)

  //when i mount the artist, use effect makes the GET request to the back end,
    //gets all the artists, sticks them in state, the second they're in state
    //react "reacts" to it and map through it and make an artist link out of each one
    //stick it in a new array and render it on the page

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



  function onAddPainting(data) {
    setPaintings((currentPaintings) => [...currentPaintings, data]) 
    

  //filter  
  }
//for form

    useEffect(() => {
        fetch(`${API}/artists`)
        .then(res => res.json())
        .then(data => {
          // console.log(data)
            setArtists(data)
        })    
    }, [])
//loads all the artists
  
  
  return (
    <Router>
      <Navigation />
        <div className="App">
          <Routes>

            <Route path="/" element={<Home />} />
            
            <Route path="/artists" element={<Artists artists={artists} setArtistId={setArtistId} />} /> 

            <Route path="/artists/:artist_id/paintings" element={<ArtistPaintings artists={artists}  />} />
             
            <Route path="/paintings" element={<Paintings onDelete={onDelete} artists={artists} paintings={paintings}/> } /> 

            <Route path="/artists/:artist_id/paintings/new" element={<PaintingForm onAddPainting={onAddPainting} />} />

            {/* <Route path="/paintings/:id" element={<Tester />} /> */}

          </Routes>
        </div>
    </Router>
  );
}

export default App;


