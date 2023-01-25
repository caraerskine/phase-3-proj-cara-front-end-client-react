import React from 'react';
import { Link } from 'react-router-dom';

//related to map in Artists
//this is the link 
//Link is for a-tags to click an artist
//links to the specific route 

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

//shortened from 
//{`http://localhost:9292/artists/:id`}