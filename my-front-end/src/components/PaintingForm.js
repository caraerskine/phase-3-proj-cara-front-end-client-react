import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


//put this in App I am not sure if that is correct



function PaintingForm ( {onAddPainting} ) {
  
  const {id} = useParams()

 
  const [paintingFormData, setPaintingFormData] = useState(
    {
      title: "",
      medium: "",  
      year: "",
      img_link: "",
      artist_id: id,  //says it is not defined, I am unsure what that means in this context
      famous: false
    }
  ); 

  console.log(paintingFormData)



  const handleChange = (event) => {
    const {id, value} = event.target;
      setPaintingFormData((paintingFormData) => ({
         ...paintingFormData,
         [id]: value
    }))
  
    console.log(paintingFormData.id)
  
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:9292/paintings', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({...paintingFormData})
    }) .then(response => response.json())
       .then(data => {console.log(data)
       })

       .then(() => setPaintingFormData({
        title: "",
        medium: "",  
        year: "",
        img_link: "",
        artist_id: id,  
        famous: false
       }));
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
          <label htmlFor="medium">medium</label>
           <input 
          type="text" 
          value={paintingFormData.medium} 
          id="medium"
          onChange={handleChange}
          />
          <label htmlFor="year">year</label>
           <input 
          type="text" 
          value={paintingFormData.year} 
          id="year"
          onChange={handleChange}
          />
          <br></br>
          <label htmlFor="img_link">image</label>
          <input 
          type="text" 
          value={paintingFormData.img_link} 
          id="img_link"
          placeholder="url"
          onChange={handleChange}
          />
          <label htmlFor="famous">is this painting famous?</label>
          <select 
          value={paintingFormData.famous} 
          id="famous" 
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

export default PaintingForm;