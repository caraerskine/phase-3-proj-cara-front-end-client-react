import React, { useEffect, useState } from "react";

//list of artists that are clickable links so that you can see individual ones

const Artists = () => {

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

    return (
        <div className="App" >
            <ul>
                {artistsList}
            </ul>
        </div>
  );
}

export default Artists;