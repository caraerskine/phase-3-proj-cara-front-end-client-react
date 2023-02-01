import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Painting from './Painting';

function Artist () {

    const [artist, setArtist] = useState([])

    const params = useParams()
 
    //reach into URL and find route it and parse out the params 
    useEffect(() => {
        fetch(`http://localhost:9292/artists`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
            setArtist(data)
        })
    }, []) 

 
    //do i need dependency array above, the warnings told me to remove it, idk?

    //below for when I want to add a painting I think
    // const addPainting = (painting) => {
    //     fetch(`http://localhost:9292/paintings`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             name: painting.name,
    //             artist_id: params.id
    //         })
    //     })
    // }

    const paintings = artist.paintings.map(p => <Painting key={p.id} painting={p} />)

  return (
    <div>
        <br/>
        <h2>{paintings.name}</h2>
        <hr/>
        <h3>Paintings:</h3>
        <br/>
        {paintings}
        <br/>
    </div>
  )
}

export default Artist