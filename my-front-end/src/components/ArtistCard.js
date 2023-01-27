import React from 'react'
import { useNavigate } from 'react-router';
import { Card, CardContent, CardMedia, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function ArtistCard ( {artist} ) {


 const navigate = useNavigate()

    return (
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia
                sx={{ height: 500 }}
                image={artist.img_link}
                title="artist portrait"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {artist.first_name} {artist.last_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {artist.famous}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => navigate(`${artist.id}/add-painting`)} size="small">Add A Painting ➕</Button>
          
                <Button size="small">See All Paintings by this artist 🖼️</Button>
              </CardActions>
            </Card>
      );
    
}


export default ArtistCard;



