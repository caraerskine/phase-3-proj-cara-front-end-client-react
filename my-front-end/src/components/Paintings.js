import React from 'react';
import PaintingCard from './PaintingCard';


function Paintings ( {paintings} ) {


const displayPaintings = paintings.map((painting, index) => 
    <PaintingCard key={index} painting={painting}/>
)

    return (
        <div className="App" >
            {displayPaintings}
        </div>
    );
  }


export default Paintings;

