import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Painting ( {paintings} ) {

const [painting, setPainting] = useState([])

const params = useParams()

  //reach into URL and find route it and parse out the params 
  useEffect(() => {
    fetch(`http://localhost:9292/paintings/:id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setPainting(data)
    })
}, []) 

  // const paintings = paintings.filter(painting => )

  return (
    <div>
        <br/>
        <h2>{painting.name}</h2>
        <h3>Paintings:</h3>
        <br/>
        {paintings}
    </div>
  )
}

export default Painting
