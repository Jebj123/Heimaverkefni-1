import React, { useState } from 'react'
import "./submitstyle.css"
import subDog1 from "/src/assets/subDog1.jpg"
import subDog2 from "/src/assets/subDog2.jpg"
import { InputName } from '../Input/InputName'
import { ShopCard } from '../Ui/shopCard'
import { InputEmail } from '../Input/InputEmail'

const Submit = () => {
    const [myName, setMyName] = useState("")
    const [email, setMyEmail] = useState("")

        return (
    <div className='submit'>
      <h2 className='h2'>Undirskriftarlisti til að gera Kronos að Glaðasta Hunds á Íslandi</h2>
      <div className='wrapper'>
          <img className='subDog1' src={subDog1} />
          <img className='subDog2' src={subDog2} />
    <div className='sumbmitInfo'>
      <InputName value={myName} onChange={(e) => setMyName(e.target.value)}/>
      <InputEmail value={email} onChange={(e) => setMyEmail(e.target.value)} />
      <p> </p>
      <button type="submit"className="submitButton"onClick={() => alert("Takk fyrir að skrifa undir!" + "\n" + "Nafn: " + myName + "\n" + "Póstfang: "+ email)}>Skráðu þig!</button>
      </div>
      <div className='img-2'>
       
      </div>
      <ShopCard />
    </div>
    </div>
  )
}

export default Submit;