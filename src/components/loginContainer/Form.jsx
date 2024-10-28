const formLogin = ({ Children, acao, metodo }) => {
  return (
    <>
      <div className="container max-w-[500px] bg-white flex flex-col items-center">
        <form action={acao} method={metodo} className="flex flex-col">
          {Children}
        </form>
      </div>
    </>
  );
};

export default formLogin;
