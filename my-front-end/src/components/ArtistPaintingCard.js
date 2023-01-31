import React from 'react'
import { Card, CardContent, CardMedia, CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ArtistPaintingCard = ( {artistPaintings, painting} ) => {

  const displayArtistPaintings = artistPaintings

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="div"
        sx={{ height: 500 }}
        image={painting.title}
        title="artist painting"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {painting.medium} {painting.year}
        </Typography>
        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
      <CardActions>
        <Button></Button>
        </CardActions>
    </Card>
  )
}

export default ArtistPaintingCard

