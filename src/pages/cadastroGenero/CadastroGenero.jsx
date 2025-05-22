//importao de componenetes:
import Footer from "../../components/footer/Footer";
import Header from "../../components/hearder/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";

import { useEffect, useState } from "react";

import Swal from "sweetalert2";

import api from "../../Services/services";


const CadastroGenero = () => {

  //nome do Genero, Estado
  const [genero, setGenero] = useState("");
  const [listaGenero, setListaGenero] = useState([])

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


  async function cadastrarGenero(evt) {
    evt.preventDefault();

    //verificar se o inputs esta vindo vazio
    if (genero.trim() != "") {

      //try = > tentar(o esperado)
      //catch => pegar a execao
      try {
        //cadastrar um genero: post
        await api.post("genero", { nome: genero });
        alertar("sucess", "Cadastro realizado com sucesso!")
        setGenero("")
        //atualiza minha lista assim que cadastra um genero
        listarGenero()
      } catch (error) {
        alert("error", "Erro! entre em contato com o suporte");
        console.log(error);
      }
    } else {
      alertar("error", "Erro! Preencha o campo")
    }
  }

  async function listarGenero() {
    try {
      // Await -> Aguarde ter uma resposta da solicitacao
      const resposta = await api.get("genero");
      console.log(resposta.data);


      setListaGenero(resposta.data);

    } catch (error) {
      console.log(error);

    }

  }

  // funcao de excluir genero:
  async function deletarGenero(generoId) {
    try {

      Swal.fire({
        title: "Você tem certeza?",
        text: "Não será possível reverter!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          //conectar a api
          //interpolacao
          //solicitar a exclusao do genero
          //`genero/${idGenero}`
          await api.delete(`genero/${generoId.idGenero}`);
          Swal.fire({
            title: "Deletado!",
            text: "Genero deletado com sucesso!",
            icon: "success"
          });
        }
      });
      listaGenero();

    } catch (error) {
      console.log(error);
    }

  }

//funcao de editar genero
 async function editarGenero(generoId) {
    const { value: novoGenero } = await Swal.fire({
      title: "Modifique seu gênero",
      input: "text",
      inputLabel: "Novo gênero",
      inputValue:  generoId.nome,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          
          return "O campo não pode estar vazio!";
        }
      }
    });
    if (novoGenero) {
      try {
        api.put(`genero/${generoId.idGenero}`, {nome: novoGenero});
              Swal.fire(`O gênero modificado ${novoGenero}`);
      } catch (error) {
        console.log(error);
      }
  
    }
  }



  //teste
  //useEffect(<fuction>, <dependency>)
  // useEffect(() => {
  //   console.log(genero)
  // }, [genero]);


  //Assim que a pagina renderizar, o método listarGenero() será chamado
  useEffect(() => {
    // alertarr("sucess", "Lista modfificada");
    listarGenero();

  }, [listaGenero])


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
          lista={listaGenero}
          funcExcluir={deletarGenero}
          funcEditar={editarGenero}

          tipoLista="genero"
        />
      </main>

      <Footer />
    </>
  );
}

export default CadastroGenero;