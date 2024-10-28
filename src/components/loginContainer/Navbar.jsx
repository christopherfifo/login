const navbar = ({ icon1, link1, texto1, icon2, link2, texto2 }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href={link1}>
                {icon1}
                {texto1}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={link2}>
                {icon2}
                {texto2}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default navbar;
