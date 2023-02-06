import React from 'react';
import PaintingCard from './PaintingCard';


function Paintings ( {paintings, onDelete} ) {


const displayPaintings = paintings.map((painting) => 
    <PaintingCard key={painting.id} painting={painting} onDelete={onDelete}/>
)

    return (
        <div className="App" >
            {displayPaintings}
        </div>
    );
  }


export default Paintings;

