import React from 'react'
import { Card, CardContent, CardMedia, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function ArtistCard ( {artist} ) {
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
                <Button size="small">Add A Painting ➕</Button>
                <Button size="small">Remove a Painting 🗑️</Button>
                <Button size="small">See All Paintings by this artist 🖼️</Button>
              </CardActions>
            </Card>
      );
    
}


export default ArtistCard;



