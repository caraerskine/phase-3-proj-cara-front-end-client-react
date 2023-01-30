import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PaintingCard from './PaintingCard';
// import Painting from './Painting'


//I am trying to get the paintings of individual artists to show up 
//when the user clicks on "See all the Paintings by this artist" on the card 

//I passed down artists and paintings as props

//use Params is a hook that returns an object of key/value pairs of the 
//dynamic params of the url matched by the <Route>. Child routes
//inherit all params from their parent routes.

function Paintings ( {paintings} ) {

    // const params = useParams()
    // console.log(params)

    // const paintingsList = paintings.filter(painting => <PaintingCard key={painting.id} painting={painting} />)
    //all the paintings on a card for each one
       
   
//     const [painting, setPainting] = useState([])

//   useEffect(() => {
//     if (!paintings) return 
// }, [paintings]) 
// console.log(paintings)

const displayPaintings = paintings.map((painting) => 
    <PaintingCard painting={painting}/>
)

    // function filter(params) {
    //    paintings = artists.find(artist => artist.id = params.id).paintings
    // }
    //     const paintingsToList = params ? filter(params.id) : paintings
     
    //     const listPaintings = paintingsToList.map(painting => <PaintingCard key={painting.id} painting={painting}/>)
        //send one individual artist's paintings on a card for each one


    return (
        <div className="App" >
            {/* {listPaintings}   */}
            {displayPaintings}
        </div>
    );
  }


export default Paintings;

