import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArtistPaintingCard from './ArtistPaintingCard';


function ArtistPaintings ( {artists}) {

//show the paintings for each individual artist
//const [artistPaintings, setArtistPaintings] = useState([])

const params = useParams()

let artistPaintings = [] 

if (artists.length > 0){ 
  const artistId = parseInt(params.artist_id)
  const artist = artists.find(a => a.id == artistId)
  artistPaintings = artist.paintings
}

// useEffect(() => {
//   // console.log(artists)
//     const artistId = parseInt(params.artist_id)
//     const artist = artists.find(a => a.id == artistId)
//     setArtistPaintings(artist.paintings)
    
// }, [])
console.log(artists)

const displayPaintings = artistPaintings.map((painting) => 
    <ArtistPaintingCard key={painting.id} painting={painting}/>
)

    return (
        <div className="App" >
          {displayPaintings}
        </div>
    );
  }


export default ArtistPaintings;


