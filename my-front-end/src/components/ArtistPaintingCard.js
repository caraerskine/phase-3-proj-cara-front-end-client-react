import React from 'react'
import { Card, CardContent, CardMedia, CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ArtistPaintingCard = ( {artistPaintings} ) => {

//what Maika and i made for the cards just for the individual artists paintings

  const displayArtistPaintings = artistPaintings

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="div"
        sx={{ height: 500 }}
        // image={artist.img_link}
        title="artist portrait"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {/* {first_name} {last_name} */}
        </Typography>
        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
      {/* <CardActions> */}
    </Card>
  )
}

export default ArtistPaintingCard

