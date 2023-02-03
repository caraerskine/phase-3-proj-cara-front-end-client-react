import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArtistPaintingCard from './ArtistPaintingCard';


function ArtistPaintings ( {artists}) {


const [artistPaintings, setArtistPaintings] = useState([])


const params = useParams()


useEffect(() => {
    const artistId = parseInt(params.artist_id)
    const artist = artists.find(a => a.id == artistId)
    setArtistPaintings(artist.paintings)
}, [])


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

