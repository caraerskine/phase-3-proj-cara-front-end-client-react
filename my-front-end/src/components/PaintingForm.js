import React, { useState } from 'react';
import { useParams } from 'react-router-dom';




function PaintingForm () {
   
  const {id} = useParams()


  const [painting, setPainting] = useState ({
      title: "",
      medium: "",  
      year: "",
      img_link: "",
      artist_id: id,
      famous: false
    }
  )

  return (
    <div>
      <h1>Painting Form</h1>
        <form>
          <label htmlFor="title">title</label>
          <input 
          type="text" 
          value={painting.title} 
          id="title"
          />
          <label htmlFor="medium">medium</label>
           <input 
          type="text" 
          value={painting.medium} 
          id="medium"
          />
          <label htmlFor="year">year</label>
           <input 
          type="text" 
          value={painting.year} 
          id="year"
          />
          <br></br>
          <label htmlFor="image">image</label>
          <input 
          type="text" 
          value={painting.img_url} 
          id="image"
          placeholder="url"
          />
          <label htmlFor="famous">is this painting famous?</label>
          <select value={painting.famous} id="famous">
            <option>true</option>
            <option>false</option>
          </select>
          

        </form>

    </div>
  )
}

export default PaintingForm;