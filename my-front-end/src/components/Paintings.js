import React from 'react';
import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import Artists from './Artists';
import PaintingCard from './PaintingCard';


function Paintings ( {artists, paintings} ) {

// console.log(paintings)

// const params = useParams()

// const [artistPaintings, setArtistPaintings] = useState([])
// console.log(artistPaintings)

// const API = 'http://localhost:9292'

// const paintingId = parseInt(params.id)

//in office hours Madeline had me make the use Params = paintingId but I lost it *thinking*

// useEffect(() => {
//     fetch(`${API}/artists/${paintingId}/paintings`)
//     .then(res => res.json())
//     .then(data => {
//         setArtistPaintings(data)
//     })
// }, [params.id])

// function filterPaintings(params){
//     return artists.find(artists => artists.id === parseInt(params.id, 10)).paintings
// }



const displayPaintings = paintings.map((painting, index) => 
    <PaintingCard key={index} painting={painting}/>
)

    return (
        <div className="App" >
            {displayPaintings}
            {/* {paintings} */}
        </div>
    );
  }


export default Paintings;

