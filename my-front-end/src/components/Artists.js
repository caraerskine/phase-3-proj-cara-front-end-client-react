import ArtistCard from './ArtistCard'


function Artists ( {artists, setArtistId, setPaintings, handleLikeArtistPaintings} ) {
    
 const artistsList = artists.map(artist => <ArtistCard key={artist.id} artist={artist} 
    setArtistId={setArtistId} artists={artists} setPaintings={setPaintings} handleLikeArtistPaintings={handleLikeArtistPaintings} />)
   
    return (
        <div className="artists">
            {artistsList}
        </div>
  );
}

export default Artists;