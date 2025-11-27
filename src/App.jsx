import Cadastro from "./assets/Pages/Cadastro/Index.jsx";
import Login from "./assets/Pages/Login/Login.jsx"
import Estoque_Produtos from '../src/assets/Pages/Estoque_Produtos/Pordutos.jsx'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Navigate to="/Login" />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Produto" element={<Estoque_Produtos />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
