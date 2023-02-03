import React, {useState} from 'react'
import { Card, CardContent, CardMedia, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


//button to Remove does not return an error but does not necessarily work yet idk

function PaintingCard ( {painting, paintings, setPaintings, setArtists} ) {

    const {img_link, title, medium, year, artist, id} = painting
    
    //for LIKER
    const [count, setCount] = useState(0);

    function Liker() {
        setCount(prevCount => prevCount +1)
    }
    //persist "like" in back end NOT THE CASE YET
    //Have not activated the backend params listening


    // for the DELETE trash can remove
    function handleDelete(deletePainting) {
        fetch(`http://localhost:9292/paintings/${painting.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type" : "application/json"
            }
          });
    
        const deleted = paintings.filter((painting) => painting.id !== deletePainting)
        setPaintings(deleted)
        //setPaintings (find the painting and delete it from all the paintings)   

        const removed = paintings.filter((painting) => painting.id !== deletePainting) 
        setArtists(removed)
        // setArtists (find the painting and delete it from artists' paintings)
    }

    console.log(handleDelete)

   

    return (
        <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="div"
              sx={{ height: 500 }}
              image={img_link}
              title="painting"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {title}
                </Typography>
                <Typography>
                {medium}, {year}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {artist.first_name} {artist.last_name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={handleDelete} size="small">Delete ➖</Button> 
                <Button onClick={Liker} size="small">Like 💛</Button> <p>{count}</p>
            </CardActions>
        </Card>
   

   )
}

export default PaintingCard;


//navigate(`/paintings/${artist.id}`)

//handleDelete(painting.id)

//how to fit into the onClick function on line 61 because of use Navigate
//

//additionally, you could update the paintings in case the info was wrong PATCH
//be able to delete a painting DELETE
//Liker can be UPDATE/Patch

//need a URL path for it in the back end for PATCH and DELETE

//       {/* <Button onClick={() => navigate()} size="small">Edit 📝</Button> */}