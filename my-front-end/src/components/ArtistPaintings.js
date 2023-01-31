import React from 'react'
import ArtistPaintingCard from './ArtistPaintingCard';


const ArtistPaintings = ( {artistPaintings} ) => {
 
const displayCard = artistPaintings.map((painting, index) => 
    <ArtistPaintingCard key={index} painting={painting}/>
)

    return (
        <div className="App" >
            {displayCard}
        </div>
    );
  }
export default ArtistPaintings

