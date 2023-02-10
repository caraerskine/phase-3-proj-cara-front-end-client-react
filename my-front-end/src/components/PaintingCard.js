import React, {useState} from 'react'
import { Card, CardContent, CardMedia, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function PaintingCard ( {painting, onDelete, handleLikePainting} ) {

    const {img_link, title, medium, year, artist, like} = painting
    // debugger
    //state and function for LIKER
    // const [count, setCount] = useState(0);

    // function Liker() {
    //     setCount(prevCount => prevCount +1)
    // }
  
    // for DELETE a painting
    function handleDelete(e) {
        fetch(`http://localhost:9292/paintings/${painting.id}`, {
            method: "DELETE",
          })
            .then(() => onDelete(painting))
      }

    //PATCH for Liker
    function handleLiker(e){
        fetch(`http://localhost:9292/paintings/${painting.id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({like: painting.like +1}),
        })
          .then((response) => response.json())
          .then((updatedPainting) => {
            handleLikePainting(updatedPainting)
          })
          // have a useEffect run when the "count" piece of state is updated
          // do not run it on initial render, pass in count
          // get response
          // replace old painting obj with new 
          //update state of artists nested paintings array
      }
  
// PUT: update existing resource
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
                <Button onClick={handleLiker} size="small">Like 💛</Button> <p>{like}</p>
            </CardActions>
        </Card>
   

   )
}

export default PaintingCard;

