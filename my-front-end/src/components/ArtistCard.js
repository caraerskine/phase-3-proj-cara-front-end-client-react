import React from "react";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Paintings from "./Paintings";

function ArtistCard({ artist, setArtistId }) {

  const { first_name, last_name } = artist;

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
        <Link to={`/paintings/${artist.id}`}>

        See All Paintings by this artist 🖼️
            

        </Link>
      </CardActions>
    </Card>
  );
}

export default ArtistCard;
