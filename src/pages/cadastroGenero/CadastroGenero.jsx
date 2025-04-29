import Footer from "../../components/footer/Footer";
import Header from "../../components/hearder/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";

const CadastroGenero = () => {
    return(
       <>
       <Header/>

       <main>
        <Cadastro
          tituloCadastro="Cadastro de Generos"
            visibilidade = "none"
            nomeInput = "Genero"
          />
       
        
        <Lista
        tituloLista = "generos"
        visible ="none"
        />
       </main>

       <Footer/>
       </>
    )
}

export default CadastroGenero;