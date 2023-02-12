import React, {useState} from 'react'
import { Card, CardContent, CardMedia, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function PaintingCard ( {painting, onDelete, handleLikePainting} ) {

    const {img_link, title, medium, year, like} = painting
    // debugger


    const [count, setCount] = useState(1);
  
    function handleDelete(e) {
        fetch(`http://localhost:9292/paintings/${painting.id}`, {
            method: "DELETE",
          })
            .then(() => onDelete(painting))
      }

    function handleLiker(e){
      e.preventDefault(e)

        setCount(count +1)
        const updateLike = like + 1
       
        fetch(`http://localhost:9292/paintings/${painting.id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({like: updateLike}),
        })
          .then((response) => response.json())
          .then((updatedPainting) => {
            handleLikePainting(updatedPainting)
          })
      }

      // {like: painting.like +1} was in stringify ()
    return (
        <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="div"
              sx={{ height: 500 }}
              image={img_link}
              title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {title}
                </Typography>
                <Typography>
                {medium}, {year}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {} {}
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

