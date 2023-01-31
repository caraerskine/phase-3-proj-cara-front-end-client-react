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
import ArtistPaintings from './components/ArtistPaintings';


function App() {

  const [artistPaintings, setArtistPaintings] = useState({
    paintings:[],
  })

 //artistPaintings will be passed down to a component that will render 
 //the artist along with his or her paintings (done)

 //in the new component you must map over artistPaintings to display subsequent data
 //when that button gets clicked you are going to reroute

 //in ArtistPaintings.js we will pass down artistPainting (state) and do a .map 
 //to display info to artist painting cards 
 //import artistPaintingCards into artistPaintings

  console.log(artistPaintings)

  const [artistId, setArtistId] = useState(1)
  // console.log(artistId)
  
  const [artists, setArtists] = useState ([])

  const [paintings, setPaintings] = useState ([])

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
            setArtists(data)
        })    
    }, [])

   
    //for individual artist's paintings aka see all paintings by this artist button

    useEffect(() => {
      fetch(`${API}/artists/${artistId}`)
      .then(res => res.json())
      .then(data => {
         setArtistPaintings(data)
      })    
  }, [artistId])

  


//ViewArtist is new component to display the single artist's ptgs.
  
  return (
    <Router>
      <Navigation />
        <div className="App">
          <Routes>

            <Route path="/" element={<Home />} />
            
            <Route path="/artists" element={<Artists artists={artists} setArtistId={setArtistId} />} /> 

            <Route path="/artists/:id" element={<Artist artists={artists}/>} /> 

            <Route path="/artists/:id" element={<ArtistPaintings artistPaintings={artistPaintings} />} />
             
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

//button artistId must update artistID state in App.js
//to display the artist's individual paintings to artist/id 