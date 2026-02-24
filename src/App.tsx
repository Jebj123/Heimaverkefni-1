import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Submit from './Components/Submit/Submit'

function App() {

  return (
   <BrowserRouter>
   <Layout>
    <Routes>
      <Route path="/" element={<About />}/>
      <Route path="/submit" element={<Submit />} />
    </Routes>
   </Layout>
   </BrowserRouter>
  )
}

export default App
