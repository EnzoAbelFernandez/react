
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 fs-5 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="sneakers.html">Sneakers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="indumentaria.html">Indumentaria</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="nosotros.html">Nosotros</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contacto.html">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default NavBar;
