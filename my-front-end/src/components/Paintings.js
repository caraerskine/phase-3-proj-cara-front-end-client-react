import React from 'react';
import { useParams } from 'react-router-dom';
// import Artists from "./Artists";
import PaintingCard from './PaintingCard';
import Painting from './Painting'


//I am trying to get the paintings of individual artists to show up 
//when the user clicks on "See all the Paintings by this artist" on the card 

//I passed down artists and paintings as props

//use Params is a hook that returns an object of key/value pairs of the 
//dynamic params of the url matched by the <Route>. Child routes
//inherit all params from their parents routes.

function Paintings ( {paintings} ) {

    const params = useParams()
    console.log(params)

    const paintingsList = paintings.map(painting => <PaintingCard key={painting.id} painting={painting}/>)

        // function Filter(params) {
        //     artists.find(artist.id = params).paintings
         

            // const paintingsToList = params ? filter(params.id) : paintings
           // filter artists to find the artist from params

        //     listPaintings = paintingsToList.map(painting => <Painting paintings={paintings}/>)
     
        //     return (
        //         <div>
        //             {listPaintings}
        //         </div>
        //     );
        // }

    return (
        <div className="App" >
            {paintingsList}
        </div>
  );
}

export default Paintings;

