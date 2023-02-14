import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


function PaintingForm ( {onAddPainting} ) {
  
  const {artist_id} = useParams()

  const [paintingFormData, setPaintingFormData] = useState(
    {
      title: "",
      medium: "",  
      year: "",
      img_link: "", 
      famous: false
    }
  ); 

  const handleChange = (event) => {
    const {id, value} = event.target;
      setPaintingFormData((paintingFormData) => ({
         ...paintingFormData,
         [id]: value
    }))

    console.log(paintingFormData)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:9292/paintings', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({...paintingFormData, artist_id: artist_id})
    }) .then(response => response.json())
       .then(data => onAddPainting(data))
       .then(() => setPaintingFormData({
        title: "",
        medium: "",  
        year: "",
        img_link: "", 
        famous: false
       }));
    
        console.log(onAddPainting)
      }


  return (
    <div className="painting-form">
      <h2>Add A New Painting</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">title</label>
          <input 
          type="text" 
          value={paintingFormData.title} 
          id="title"
          onChange={handleChange}
          />
          <br></br>
          <br></br>
          <label htmlFor="medium">medium</label>
           <input 
          type="text" 
          value={paintingFormData.medium} 
          id="medium"
          onChange={handleChange}
          />
          <br></br>
          <br></br>
          <label htmlFor="year">year</label>
           <input 
          type="text" 
          value={paintingFormData.year} 
          id="year"
          onChange={handleChange}
          />
          <br></br>
          <br></br>
          <label htmlFor="img_link">image</label>
          <input 
          type="text" 
          value={paintingFormData.img_link} 
          id="img_link"
          placeholder="url"
          onChange={handleChange}
          />
          <br></br>
          <br></br>
          <label htmlFor="famous">is this painting famous?</label>
          <select 
          value={paintingFormData.famous} 
          id="famous" 
          onChange={handleChange}>
            <option>true</option>
            <option>false</option>
          </select>
          <br></br>
          <br></br>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default PaintingForm;