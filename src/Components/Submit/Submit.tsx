import "./submitstyle.css"
import subDog1 from "/src/assets/subDog1.jpg"
import subDog2 from "/src/assets/subDog2.jpg"
import { ShopCard } from '../Ui/shopCard'
import { Form } from '../Form/Form'




const Submit = () => {
        return (
    <div className='submit'>
      <h2 className='h2'>Undirskriftarlisti til að gera Kronos að Glaðasta Hunds á Íslandi</h2>
      <div className='wrapper'>
          <img className='subDog1' src={subDog1} />
          <img className='subDog2' src={subDog2} />
    <div className='sumbmitInfo'>
      <ShopCard />
      <Form />
    </div>
    </div>
    </div>
  )
}

export default Submit;