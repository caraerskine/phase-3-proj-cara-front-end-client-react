import React from 'react';
import PaintingCard from './PaintingCard';


function Paintings ( {paintings, onDelete, handleLikePainting} ) {


const displayPaintings = paintings.map((painting) => 
    <PaintingCard key={painting.id} painting={painting} onDelete={onDelete} handleLikePainting={handleLikePainting}/>
)

    return (
        <div className="App" >
            {displayPaintings}
        </div>
    );
  }


export default Paintings;

