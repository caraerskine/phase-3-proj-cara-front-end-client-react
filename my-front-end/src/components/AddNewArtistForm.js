import React, { useState } from 'react';

const emptyForm = {
    first_name: "",
    last_name: "",
    img_link: "",
    living: "",
  }




function AddNewArtistForm () {

  const [name, setName] = useState ("")

  return (
    <div>
      PaintingForm
    </div>
  )
}

export default PaintingForm;