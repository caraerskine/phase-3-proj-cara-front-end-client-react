import ArtistCard from './ArtistCard'

//list of artists that are clickable links so that you can see individual ones

function Artists ( {artists, setArtistId, setPaintings} ) {
    
    //formFlag state was here prior as well

  
    //upon mount grab the artists and set in state

   

    const artistsList = artists.map(artist => <ArtistCard key={artist.id} artist={artist} setArtistId={setArtistId} artists={artists} setPaintings={setPaintings} />)
    //This is the single artist link that would show up

    //when i mount the artist, use effect makes the GET reqest to the back end,
    //gets all the artists, sticks them in state, the second they're in state
    //react "reacts" to it and map through it and make an artist link out of each one
    //stick it in a new array and render it on the page

    return (
        <div className="artists">
            {artistsList}
        </div>
  );
}

export default Artists;