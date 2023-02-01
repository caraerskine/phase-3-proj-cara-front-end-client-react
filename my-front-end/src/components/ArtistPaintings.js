import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PaintingCard from './PaintingCard';


function ArtistPaintings () {

// console.log(paintings)

const params = useParams()

const [artistPaintings, setArtistPaintings] = useState([])
// console.log(artistPaintings)

const API = 'http://localhost:9292'

const artistId = parseInt(params.id)

//in office hours Madeline had me make the use Params = paintingId but I lost it *thinking*

useEffect(() => {
    fetch(`${API}/artists/${artistId}/paintings`)
    .then(res => res.json())
    .then(data => {
        setArtistPaintings(data)
        console.log(data)
    })
}, [params.id])

// function filterPaintings(params){
//     return artists.find(artists => artists.id === parseInt(params.id, 10)).paintings
// }


const displayPaintings = artistPaintings.map((painting, index) => 
    <PaintingCard key={index} painting={painting}/>
)

    return (
        <div className="App" >
          {displayPaintings}
        </div>
    );
  }


export default ArtistPaintings;

