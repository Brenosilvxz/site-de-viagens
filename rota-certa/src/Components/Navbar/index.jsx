import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <div className="logo-icon">◎</div>
        <span>Rota Certa</span>
      </div>

      <nav className="nav-links">
        <a href="#">Destinos</a>
        <a href="#">Experiências</a>
        <a href="#">Sobre nós</a>
      </nav>

      <button className="btn-trip">
        Planejar viagem
      </button>
    </header>
  );
}

export default Navbar;