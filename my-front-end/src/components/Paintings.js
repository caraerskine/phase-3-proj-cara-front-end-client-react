import React from 'react';
// import Artists from './Artists';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PaintingCard from './PaintingCard';


function Paintings() {

  
  const params = useParams()

  const paintingId = parseInt(params.id)

    useEffect(() => {
      fetch(`http://localhost:9292/artists/${paintingId}/paintings`)
      .then(res => res.json())
      .then(data => {
        console.log("paintings", data)
        setPaintings(data)
      })
    }, [params.id]) 

  
// change the button navigation paintings/id and not artists because we are using the painting route 
// console.log(paintings) filter by id, artist_id (foreign key)

// function filterPaintings(params){
//     return artists.find(artists => artists.id === parseInt(params.id, 10)).paintings
// }

// const paintingsToList = params ? filterPaintings(params.id) : paintings

// const listPaintings = paintingsToList.map(painting => <PaintingCard key={painting.id} painting={painting}/>)

const displayPaintings = paintings.map((painting) => 
    <PaintingCard key={painting.id} painting={painting}/> )


    return (
        <div className="App" >
            {/* {paintingsToList} */}
            {displayPaintings}
        </div>
    );
  }


export default Paintings;

