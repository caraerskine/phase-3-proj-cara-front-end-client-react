import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Artist from './components/Artist';
import Artists from './components/Artists';
import Paintings from './components/Paintings';
import PaintingForm from './components/PaintingForm';
import ArtistPaintings from './components/ArtistPaintings';


function App() {

  const [artistPaintings, setArtistPaintings] = useState({
    paintings:[],
  })

  const [paintings, setPaintings] = useState ([])

  const [artists, setArtists] = useState ([])

  const [artistId, setArtistId] = useState(1)
  // console.log(artistId)


  console.log(artistPaintings)

  const API = 'http://localhost:9292'


  useEffect(() => {
    fetch(`${API}/artists`)
    .then(res => res.json())
    .then(data => {
        setArtists(data)
    })    
}, [])
//this use effect and fetch above is setting the artists


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


    
    //for individual artist's paintings aka see all paintings by this artist button
//duplicate from params in Artist.js
  //   useEffect(() => {
  //     fetch(`${API}/artists/${artistId}`)
  //     .then(res => res.json())
  //     .then(data => {
  //        setArtistPaintings(data)
  //     })    
  // }, [artistId])


//ViewArtist is new component to display the single artist's ptgs.
  
  return (
    <Router>
      <Navigation />
        <div className="App">
          <Routes>

            <Route path="/" element={<Home />} />
            
            <Route path="/artists" element={<Artists />} /> 

            <Route path="/artists/:id" element={<Artist />} /> 

            <Route path="/artists/:id" element={<ArtistPaintings artistPaintings={artistPaintings} />} />
             
            <Route path="/paintings" element={<Paintings /> } /> 

            <Route path="artists/:id/add-painting" element={<PaintingForm onAddPainting={onAddPainting} />} />

            <Route path="/paintings/:id" element={<Paintings />} />

          </Routes>
        </div>
    </Router>
  );
}

export default App;


/* <Route path="/painting" element={<Painting />} /> */

//button artistId must update artistID state in App.js
//to display the artist's individual paintings to artist/id 