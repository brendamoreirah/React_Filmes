import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login"
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"

// Criação do componente de rotas chamado "Rotas"

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* http://localhohost:3000/  => Login */}
                <Route path="/" element={<Login/>} exact />
                {/* http://localhohost:3000/  => CadastroFilme  */}
                <Route path="/Filme" element={<CadastroFilme/>}/>
                {/* http://localhohost:3000/  => CadastroGenero */}
                <Route path="/Genero" element={<CadastroGenero/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;