import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


function ArtistForm( {onAddArtist} ) {
  
    const {id} = useParams()

    const [artistFormData, setArtistFormData] = useState(
        {
            first_name: "",
            last_name: "",  
            living: false,
            img_link: "",
            artist_id: id
        }
      ); 

    const handleChange = (event) => {
        const {id, value} = event.target;
          setArtistFormData((artistFormData) => ({
             ...artistFormData,
             [id]: value
        }))
      }


    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:9292/artists', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({...artistFormData})
        }) .then(response => response.json())
           .then(data => {console.log(data)
           })
           .then(() => setArtistFormData({
            first_name: "",
            last_name: "",  
            living: false,
            img_link: "",
            artist_id: id 
           }));
        }
  

    return (
        <div className="artist-form">
          <h2>Add A New Artist</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="first_name">first name</label>
              <input 
              type="text" 
              value={artistFormData.first_name} 
              id="first_name"
              onChange={handleChange}
              />
              <label htmlFor="last_name">last name</label>
               <input 
              type="text" 
              value={artistFormData.last_name} 
              id="last_name"
              onChange={handleChange}
              />
              <br></br>
              <label htmlFor="img_link">picture of the artist</label>
              <input 
              type="text" 
              value={artistFormData.img_link} 
              id="img_link"
              placeholder="url"
              onChange={handleChange}
              />
              <label htmlFor="living">is this artist living?</label>
              <select 
              value={artistFormData.living} 
              id="living" 
              onChange={handleChange}>
                <option>true</option>
                <option>false</option>
              </select>
              <br></br>
              <button type="submit">Submit</button>
            </form>
        </div>
      )
}

export default ArtistForm;