import React from 'react';
import { Link } from 'react-router-dom';

//related to map in Artists

const ArtistLink = ( {artist} ) => {
  return (
    <div>
        <Link to={`/artists/${artist.id}`}>

            <h3>{artist.name}</h3>    

        </Link>
    </div>
  )
}

export default ArtistLink;