import React from 'react';



function Painting ( {painting, paintings} ) {  

  return (
    <div>
        <br/>
        <h2>{painting.name}</h2>
        <h3>Paintings:</h3>
        <br/>
          {paintings}
    </div>
   ); 
  } 

export default Painting;

  