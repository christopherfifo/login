const inputForm = (tipo, discricao, valor, funcao) => {
  return (
    <div className="input-form">
      <input
        type={tipo}
        placeholder={discricao}
        value={valor}
        onChange={funcao}
      />
    </div>
  );
};

export default inputForm;
