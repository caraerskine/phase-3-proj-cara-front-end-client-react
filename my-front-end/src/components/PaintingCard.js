import React, {useState} from 'react'
import { useNavigate } from 'react-router';
import { Card, CardContent, CardMedia, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


//need to pass down artist or artists but I get confused on like 22 in Paintings.js

function PaintingCard ( {painting} ) {

    const {img_link, title, medium, year, artist, id} = painting
    

    const navigate = useNavigate()
 
    const [count, setCount] = useState(0);

    function Liker() {
        setCount(prevCount => prevCount +1)
    }

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
                {artist.first_name}, {artist.last_name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => navigate()} size="small">Remove 🗑️</Button> 

                {/* <Button onClick={() => navigate()} size="small">Edit 📝</Button> */}
          
                <Button onClick={Liker} size="small">Like 💛</Button> <p>{count}</p>
            </CardActions>
        </Card>
   

   )
}

export default PaintingCard;


//additionally, you could update the paintings in case the info was wrong PATCH
//be able to delete a painting DELETE
//Liker can be UPDATE/Patch

//need a URL path for it in the back end for PATCH and DELETE