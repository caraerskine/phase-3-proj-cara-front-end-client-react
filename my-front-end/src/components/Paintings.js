import React from 'react';
import PaintingCard from './PaintingCard';


function Paintings ( {paintings, setPaintings} ) {


const displayPaintings = paintings.map((painting, index) => 
    <PaintingCard key={index} painting={painting} setPaintings={setPaintings}/>
)

    return (
        <div className="App" >
            {displayPaintings}
        </div>
    );
  }


export default Paintings;

