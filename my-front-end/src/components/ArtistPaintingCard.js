import React, {useState}  from 'react'
import { Card, CardContent, CardMedia, CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ArtistPaintingCard ( {painting} ) {

return (
  <Card sx={{ maxWidth: 500 }}>
    <CardMedia
      component="div"
      sx={{ height: 500 }}
      image={painting.img_link}
      title="painting"
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        <h2>{painting.title}</h2>
      </Typography>
      <Typography>
        <>{painting.medium}, {painting.year}</>
      </Typography>
      <Typography variant="body2" color="text.secondary">
      </Typography>
    </CardContent>
    <CardActions> 
    </CardActions>
  </Card> 
  )
}

export default ArtistPaintingCard


