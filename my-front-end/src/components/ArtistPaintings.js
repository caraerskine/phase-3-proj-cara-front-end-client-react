import React from 'react';
import { useParams } from 'react-router-dom';
import ArtistPaintingCard from './ArtistPaintingCard';


function ArtistPaintings ( {artists} ) {

  const params = useParams()

  let artistPaintings = [] 

  if (artists.length > 0){ 
    const artistId = parseInt(params.artist_id)
    const artist = artists.find(a => a.id == artistId)
    artistPaintings = artist.paintings
  }

  const displayPaintings = artistPaintings.map((painting) => 
      <ArtistPaintingCard key={painting.id} painting={painting} artists={artists}/>
  )

    return (
        <div className="App" >
          {displayPaintings}
        </div>
  );
}


export default ArtistPaintings;


