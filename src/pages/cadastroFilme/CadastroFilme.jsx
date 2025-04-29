import Header from "../../components/hearder/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista"
import { Fragment } from "react";

const CadastroFilme = () => {
    return(
        <Fragment>
            <Header/>
            <main>
            <Cadastro tituloCadastro="Cadastro de Filmes"
            nomeInput = "Filme"
            
            />
            <Lista
            tituloLista = "Filmes"
            />
            </main>
            <Footer/>
        </Fragment>
        //dentro do jsx é obrigatorio uma tag pai, que nesse caso usamos o Fragment que é um pai que agrupa elementos sem nó
        // ou voce escreve a palavra fragment ou voce usa o simbolo <> = mesma coisa que escrever a palavra fragment no codigo
    )

}
 export default CadastroFilme;