import React, { useEffect, useState } from "react";
import ArtistLink from './ArtistLink'

//list of artists that are clickable links so that you can see individual ones

function Artists () {

    const [artists, setArtists] = useState ([])

    //formFlag state was here prior as well

    const API = 'http://localhost:9292/artists'

    useEffect(() => {
        fetch(API)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setArtists(data)
        })    
    }, [])
    //upon mount grab the artists and set in state

    const artistsList = artists.map(artist => <ArtistLink key={artist.id} artist={artist} />)
    //This is the single artist link that would show up

    //when i mount the artist, use effect makes the GET reqest to the back end,
    //gets all the artists, sticks them in state, the second they're in state
    //react "reacts" to it and map through it and make an artist link out of each one
    //stick it in a new array and render it on the page

    return (
        <div className="App" >
            <>
                {artistsList}
            </>
        </div>
  );
}

export default Artists;