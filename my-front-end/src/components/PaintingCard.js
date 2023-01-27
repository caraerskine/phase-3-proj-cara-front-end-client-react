import React from 'react'
import { useNavigate } from 'react-router';
import { Card, CardContent, CardMedia, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const PaintingCard = ({painting}) => {

    
 const navigate = useNavigate()
  
    return (
        // <div>PaintingCard</div>
        <Card sx={{ maxWidth: 500 }}>
        <CardMedia
        sx={{ height: 500 }}
        image={painting.img_link}
        title="artist painting"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {painting.title} {painting.medium} {painting.year}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {painting.famous}
        </Typography>
        </CardContent>
        <CardActions>
       <Button size="small">Remove a Painting 🗑️</Button> 
        <Button>Update this painting 📝 </Button>
        </CardActions>
    </Card>

   )
}

export default PaintingCard;


//this card i want to go to when users click on "see all paintings by this artist" on the artist card
//that takes you to page that displays the particular paintings just by that artist
//i need to filter over the paintings 

//additionally, you could update the paintings in case the info was wrong PATCH
//be able to delete a painting DELETE

//this needs a fetch to show all the paintings in the cards 
//where does this fetch live?

//need a URL path for it in the back end