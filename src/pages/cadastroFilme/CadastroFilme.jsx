import Header from "../../components/hearder/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista"

import { useEffect, useState } from "react";

import Swal from "sweetalert2";

import api from "../../Services/services";

const CadastroFilme = () => {

    const [listaGenero, setListaGenero] = useState([]);
    const [genero, setGenero] = useState("");
    const [filme, setFilme] = useState ("");
    const [listaFilme, setListaFilme] = useState([])

      function alertar(icone, mensagem) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: icone,
          title: mensagem
        });
      }
    

    //funcao para trazer os generos para o meu select
    async function listarGenero() {

        try {
            const resposta = await api.get("genero");
            setListaGenero(resposta.data)
            setListaFilme(resposta.data);

        } catch (error) {
            console.log(error)
        }
    }

  async  function cadastrarFilme(evt){
    evt.preventDefault();

        if(filme.trim() != ""){
            //tratamento de excecao
        
        try {
            await api.post("filme", {titulo: filme, idGenero: genero});
            alertar("success", "Sucesso! Cadastro realizado com sucesso");
            setFilme("");
            setGenero("");
        } catch (error) {
            console.log(error);
            
        }
         }

        // alert("foi chamado o cadastrarFilme!")
    }


    async function listarFilme() {
        try {
            const resposta = await api.get("filme")
            setListaFilme(resposta.data)
        } catch (error) {
            console.log(error);
        }
    }



//useEffect é quando a pagina for renderisada/atualizada irá aparecer as coisas novas
    useEffect(() => {
        listarGenero();
        listarFilme();
    }, []);



    return (

        <>
            <Header />
            <main>
                <Cadastro tituloCadastro="Cadastro de Filmes"
                    nomeInput="Filme"
                    lista = {listaGenero}
                    funcCadastro = {cadastrarFilme}

                    valorInput = {filme}
                    setValorInput = {setFilme}

                    valorSelect = {genero}
                    setValorSelect = {setGenero}

                />
                <Lista
                    tituloLista="Lista de Filmes"

                    tipoLista="filme"
                    lista = {listaFilme}

                />
            </main>
            <Footer />
        </>
        //dentro do jsx é obrigatorio uma tag pai, que nesse caso usamos o Fragment que é um pai que agrupa elementos sem nó
        // ou voce escreve a palavra fragment ou voce usa o simbolo <> = mesma coisa que escrever a palavra fragment no codigo
    )

}
export default CadastroFilme;