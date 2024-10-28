//! importação das pages
import "./App.css";

//& importação de icones

import {FaHeart} from 'react-icons/fa'
import ContainerMain from "./components/loginContainer/ContainerMain.jsx";
import Form from "./components/loginContainer/Form.jsx";
import InputForm from "./components/loginContainer/InputForm.jsx";
import TitleForm from "./components/loginContainer/TitleForm.jsx";
import Botao from "./components/loginContainer/ButtonForm.jsx";
import Navbar from "./components/loginContainer/Navbar.jsx";

//$ importação de imgs

import misterBoombastic from './assets/pictures/mister-boombastic.jpeg'

function App() {
  return (
    <>
      <ContainerMain>
        <img src= {misterBoombastic} alt="" />
        <Navbar icon1={""} link1={""} texto1={"Home"} icon2={""} link2={""} texto2={"Cadastro"} />
        <Form acao={""} metodo={""}>
          <TitleForm texto={"Formulário de Cadastro"} icon = {FaHeart} />
          <InputForm tipo={"text"} discricao={"Nome"} valor={""} funcao={""} />
          <InputForm tipo={"text"} discricao={"Nome"} valor={""} funcao={""} />
          <InputForm tipo={"text"} discricao={"Nome"} valor={""} funcao={""} />
          <InputForm tipo={"text"} discricao={"Nome"} valor={""} funcao={""} />
          <InputForm tipo={"text"} discricao={"Nome"} valor={""} funcao={""} />
          <Botao texto={"Cadastrar"} funcaoAcao={""} />
        </Form>
      </ContainerMain>
    </>
  );
}

export default App;
