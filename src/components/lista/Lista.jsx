import "./Lista.css";
import Editar from "../../assets/img/pen-to-square-solid.svg";
import Excluir from "../../assets/img/trash-can-regular.svg";

const Lista = (props) => {
     return(
            <section className="layout_grid listagem">
                <h1>{`Lista de ${props.tituloLista}`}</h1>
                <hr/>

                <div className="tabela">
                    <table>
                        {/* cabecalho da tabela, thead é a tag */}
                        <thead>
                            {/* tr => table row(tabela linha) */}
                            <tr className="table_cabecalho">
                                <th>Nome</th>  
                                <th style={{display: props.visible}}>Genero</th>
                                <th>Editar</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>
                        {/* tbody => corpo da tabela */}
                        <tbody>
                            {/* tr é uma linha ta tabela */}
                            <tr className="item_lista">
                                <td data-cell= "Nome" style={{display: props.visible}}>Harry Potter</td>
                                <td data-cell= "Genero"> Ação</td>
                                <td data-cell= "Editar"><img src={Editar} alt="" /></td>
                                <td data-cell= "Editar"><img src={Excluir} alt="" /></td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </section>
     )
}

export default Lista;