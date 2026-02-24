import React, { useState } from 'react'
import "./submitstyle.css"
import subDog1 from "/src/assets/subDog1.jpg"
import subDog2 from "/src/assets/subDog2.jpg"

const Submit = () => {
    const [myName, setMyName] = useState("")
    const [email, setMyEmail] = useState("")
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setMyName(e.target.value)
        }
        return (
    <div className='submit'>
      <h2 className='h2'>Undirskriftarlisti til að gera Kronos að Glaðasta Hunds á Íslandi</h2>
      <div className='wrapper'>
          <img className='subDog1' src={subDog1} />
          <img className='subDog2' src={subDog2} />
    <div className='sumbmitInfo'>
      <p>Nafn: </p>
      <input type="text" name="name" id="name" value={myName} onChange={(e) => handleChange(e)}/>
      <br />
      <p>Email: </p>
      <input type="email" name="email" id="email" value={email} onChange={(e) => setMyEmail(e.target.value)}/>
      <br />
      <p> </p>
      <button type="submit"className="submitButton"onClick={() => alert("Takk fyrir að skrifa undir!" + "\n" + "Nafn: " + myName + "\n" + "Póstfang: "+ email)}>Skráðu þig!</button>
      </div>
      <div className='img-2'>
       
      </div>
    </div>
    </div>
  )
}

export default Submit;