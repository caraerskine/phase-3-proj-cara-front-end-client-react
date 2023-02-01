import React from "react";
import { useNavigate } from "react-router";
import { Card, CardContent, CardMedia, CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paintings from "./Paintings";

function ArtistCard({ artist, setArtistId }) {

  const { first_name, last_name } = artist;

  const API = "http://localhost:9292";

  // const onClick = function () {
  //   fetch(`${API}/artists/:id`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setArtistId(data);
  //     });
  // };

  const navigate = useNavigate();

  function viewArtistPaintings(paint) {
      setArtistId(paint)
  }

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="div"
        sx={{ height: 500 }}
        image={artist.img_link}
        title="artist portrait"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {first_name} {last_name}
        </Typography>
        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => navigate(`${artist.id}/add-painting`)}
          size="small"
        >
          Add A Painting ➕
        </Button>

        <Button 
          onClick={() => navigate(`${artist.id}`)} 
          size="small"
        >
          See All Paintings by this artist 🖼️
        </Button>
        <Button 
          onClick={() => viewArtistPaintings(artist.id)} 
          size="small"
        >
          See All Paintings by this artist 🖼️
        </Button>
      </CardActions>
    </Card>
  );
}

export default ArtistCard;
