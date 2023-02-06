import React, {useState} from 'react'
import { Card, CardContent, CardMedia, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


//button to Remove does not return an error but does not necessarily work yet idk

function PaintingCard ( {painting, paintings, onDelete, setArtists} ) {

    const {img_link, title, medium, year, artist, id} = painting
    
    //for LIKER
    const [count, setCount] = useState(0);

    function Liker() {
        setCount(prevCount => prevCount +1)
    }
  
    // for the DELETE a painting
    function handleDelete(e) {
        fetch(`http://localhost:9292/paintings/${painting.id}`, {
            method: "DELETE",
          })
            .then(() => onDelete(painting))
        
      
      }

    //PATCH here for Liker
    function handleLiker(){
        fetch(`http://localhost:9292/paintings/${painting.id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({}),
        })
          .then((response) => response.json())
          .then(Liker)

          //useEffect run when the "count" piece of state is updated
          //do not run it on initial render pass in count
          //get reponse
          //replace old painting obj with new


      }
   
//debating:
// PUT: update existing resource, 
//PATCH: make partial update on a resource



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
                <Button onClick={handleLiker} size="small">Like 💛</Button> <p>{count}</p>
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