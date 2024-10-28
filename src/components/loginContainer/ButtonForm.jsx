const botao = ({texto, funcaoAcao }) => {
  return <button onClick={funcaoAcao}>{texto}</button>;
};

export default botao;
