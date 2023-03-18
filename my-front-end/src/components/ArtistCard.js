import React from "react";
import { useNavigate } from "react-router";
import { Card, CardContent, CardMedia, CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";



function ArtistCard( {artist} ) {

  const { first_name, last_name, img_link } = artist;

  const navigate = useNavigate();

  
  return (    
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="div"
        sx={{ height: 500 }}
        image={img_link}
        title={first_name + " " + last_name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {first_name} {last_name}
        </Typography>
        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => navigate(`${artist.id}/paintings/new`)}
          size="small"
        >
          Add A New Painting by {artist.first_name} {artist.last_name}➕
        </Button>

        <Button 
          onClick={() => navigate(`/artists/${artist.id}/paintings`)} 
          size="small"
        >
          See All Paintings by {artist.first_name} {artist.last_name} 🖼️
        </Button>

        <Button
          onClick={() => navigate(`/artists/new`)}
          size="small"
        >
          Add A New Artist👨‍🎨
  </Button> 
      </CardActions>
    </Card>
  );
}

export default ArtistCard;

