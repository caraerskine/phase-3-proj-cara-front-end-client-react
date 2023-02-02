import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArtistPaintingCard from './ArtistPaintingCard';


function ArtistPaintings () {

//Maika and I made this to deal with displaying each artists two (or more) paintings

// console.log(paintings)

const params = useParams()

const [artistPaintings, setArtistPaintings] = useState([])
// console.log(artistPaintings)

const API = 'http://localhost:9292'

const artistId = parseInt(params.id)

//in office hours Madeline had me make the parseInt(params.id) = paintingId but I changed it to artistId

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
    <ArtistPaintingCard key={index} painting={painting}/>
)

    return (
        <div className="App" >
          {displayPaintings}
        </div>
    );
  }


export default ArtistPaintings;

