import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "../pages/Home"
import Empresa from "../pages/Empresa"
import Contato from "../pages/Contato"
import Navbar from "./layout/Navbar"

function Barra (){
  return(
    <Router>
     <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}>
          </Route>
        <Route path="/empresa" element={<Empresa />}>
          </Route>
        <Route path="/contato" element={<Contato />}>
          </Route>
      </Routes>
    </Router>
  )
}

export default Barra