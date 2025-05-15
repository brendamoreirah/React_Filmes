import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import api from "../../Services/services";

//importao de componenetes:
import Footer from "../../components/footer/Footer";
import Header from "../../components/hearder/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";


const CadastroGenero = () => {

  //nome do Genero, Estado
  const [genero, setGenero] = useState("");

  const [listaGenero, setListaGenero] = useState([])

  function alerta(icone, mensagem){
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

  async function cadastrarGenero(evt) {
    evt.preventDefault();
    //verificar se o inputs esta vindo vazio
    if (genero.trim() != "") {

      //try = > tentar(o esperado)
      //catch => pegar a execao
      try {
        //cadastrar um genero: post
        await api.post("genero", { nome: genero });
        alerta("sucess", "Cadastro realizado com sucesso!")
        setGenero("")
      } catch (error) {
        alert("error", "Erro! entre em contato com o suporte");
        console.log(error);
      }
    } else {
      alerta("error", "Erro! Preencha o campo")
    }
  }

   async function listarGenero(){
    try{
    // Await -> Aguarde ter uma resposta da solicitacao
      const resposta = await api.get("genero");
      console.log(resposta);
      setListaGenero(resposta);

      setListaGenero(resposta.data);

    }catch(error){
      console.log(error);

    }
    
  }


  //teste
  //useEffect(<fuction>, <dependency>)
  // useEffect(() => {
  //   console.log(genero)
  // }, [genero]);


  //Assim que a pagina renderizar, o método listarGenero() será chamado
useEffect(() => {
 listarGenero();

}, [])


  return (
    <>
      <Header />

      <main>
        <Cadastro
          tituloCadastro="Cadastro de Generos"
          visibilidade="none"
          nomeInput="Genero"

          //Atribuindo a funcao:
          funcCadastro={cadastrarGenero}
          //Atribuindo o valor ao Input:
          valorInput={genero}
          //atribuindo a funcao que atualiza o meu genero:
          setValorInput={setGenero}
        />


        <Lista
          tituloLista="generos"
          visible="none"
          //atribuir para lista, o meu estado atual:
          lista = {listaGenero}
        />
      </main>

      <Footer />
    </>
  )
}

export default CadastroGenero;