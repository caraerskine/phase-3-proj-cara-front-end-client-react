import React, { useEffect, useState } from "react";

const Artists = () => {

    const [artists, setArtists] = useState ([])

    useEffect(() => {
        fetch(`http://localhost:9292/artists`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setArtists(data)
        })    
    }, [])

    const artistsList = artists.map(a => <ArtistLink key={a.id} artist={a} />)

    return (
        <div className="App" >
            <ul>
                {artistsList}
            </ul>
        </div>
  );
}

export default Artists