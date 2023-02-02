import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArtistPaintingCard from './ArtistPaintingCard';


function ArtistPaintings ( {artists}) {

//Maika and I made this to deal with displaying each artists two (or more) paintings

// console.log(paintings)

const [artistPaintings, setArtistPaintings] = useState([])

 //or ?
// const [artistPaintings, setArtistPaintings] = useState([])
// console.log(artistPaintings)

 const params = useParams()

// const API = 'http://localhost:9292'
//



//in office hours Madeline had me make the parseInt(params.id) = paintingId but I changed it to artistId

useEffect(() => {
    const artistId = parseInt(params.artist_id)
    const artist = artists.find(a => a.id == artistId)
    setArtistPaintings(artist.paintings)
}, [])

// function filterPaintings(params){
//     return artists.find(artists => artists.id === parseInt(params.id, 10)).paintings
// }


const displayPaintings = artistPaintings.map((painting) => 
    <ArtistPaintingCard key={painting.id} painting={painting}/>
)

//was mapping over artistPaintings

    return (
        <div className="App" >
          {displayPaintings}
        </div>
    );
  }


export default ArtistPaintings;

