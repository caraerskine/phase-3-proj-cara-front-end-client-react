import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Painting from '../components/Painting';

const Artist = () => {

    const [artist, setArtist] = useState[{
        paintings:[]
    }]

    const [paintingFormFlag, setPaintingFormFlag] = useState(false)  
    // will use to for form pop-up to add Painting

    const params = useParams()
 

    //reach into URL and find route it camein on and parse out the params 
    useEffect(() => {
        fetch(`http://localhost:9292/artists/${params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setArtist(data)
        })
    }) 
    //do i need dependency array above, the warnings told me to remove it, idk

    const addPainting = (painting) => {
        fetch(`http://localhost:9292/paintings`,{
            method: "POST",
            header: {

            },
            body: JSON.stringify({
                name: painting.name,
                artist_id: params.id
            })
        })
    }


    const artists = artist.paintings.map(p => <Painting key={p.id} painting={p} />)

  return (
    <div>
        <br/>
        <h2>{artist.name}</h2>
        <hr/>
        <h3>Artists:</h3>
        <br/>
        {artists}
        <br/>
    </div>
  )
}

export default Artist