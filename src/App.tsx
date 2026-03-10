import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from './Features/Products/Layout/Layout'
import About from './Features/Products/Pages/About'
import Submit from './Features/Products/Pages/Submit'

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
