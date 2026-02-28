import React from 'react'
import goodDog from "/src/assets/goodDog.png"
import "./AboutStyle.css"

const about = () => {
  return (
    <div className='containerAbout'>
        <div className='wrapperAbout'>
            <div>
                <img className='goodDog' src={goodDog}></img>
            </div>
            <div className='chatBubble1'>
                <h1 className='h2'>Um Okkur</h1>
                <br />
                <br />
                <h2 className='paraAbout'>Erum að safna undirskriftum til að auka lífsgæði Kronos</h2>
            </div>
            
            <div className='chatBubble2'>
                <h2 className='h2'>Hvað Viljum við?</h2>
                <p className='paraAbout2'> Við  viljum  að hver undirskrift er samansem og eitt klapp, eitt klór, ein dolla af hans uppáhalds blautmat og eitt leikfang í þokkabót</p>
            </div>
        </div>
    </div>
  )
}

export default about