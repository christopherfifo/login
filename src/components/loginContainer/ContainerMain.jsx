const containerMain = ({ children }) => {
  return (
    <>
      <div className="bg-blue-950 w-full h-screen flex flex-col">
        {children}
      </div>
    </>
  );
};

export default containerMain;
