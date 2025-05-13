import Logo from "../../assets/img/logo.svg"
import "./Login.css";
import Botao from "../../components/botao/Botao";

const Login = () => {
        return(
            <main className="main_login">
        <div className="banner"> </div>
        <section className="section_login">
            <img src={Logo} alt="Logo da filmoteca" /> 
            <form action="" className="form_login">  
                <h1>Login</h1>
                 <div className="campos_login">
                <div className="campo_input">
                    <label htmlFor="">Email:</label>
                    <input type="email" name="email"  placeholder="Digite seu e-mail:"/>
                </div>
                <div className="campo_input">
                    <label htmlFor="">Senha:</label>
                    <input type="password"  name="senha" placeholder="Digite sua senha:"/>
                </div>
                </div>
                <Botao nomeDoBotao="Entrar"/>

            </form>
        </section>

            </main>
        )
}

export default Login; // a partir dessa linha eu consigo pegar uma informacao exibir/exportar em  todas as telas