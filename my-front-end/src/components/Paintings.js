import React, { useEffect, useState } from "react";
import PaintingCard from './PaintingCard'


function Paintings ( {artist, paintings} ) {

    const paintingsList = paintings.map(painting => <PaintingCard key={painting.id} painting={painting} artist={artist}/>)
     
    //This is the single artist link that would show up
    // I do not see any links hmmm
    //push to paintings only of the artist by that ID 

    return (
        <div className="App" >
            {paintingsList}
        </div>
  );
}

export default Paintings;