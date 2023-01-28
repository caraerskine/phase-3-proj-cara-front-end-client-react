import React from 'react';
import { Link } from 'react-router-dom';

// related to map in Artists
// this is the link 
// Link is for a-tags to click an artist
// links to the specific route 
//this can go away when you get the artist card going

function PaintingLink ( {painting} ) {

  

  return (
    <div>
        <h1>Check out this art</h1>
        <Link to={`/paintings/${painting.id}`}>

            <h3>{painting.name}</h3>    
            

        </Link>
    </div>
  )
}

export default PaintingLink;
