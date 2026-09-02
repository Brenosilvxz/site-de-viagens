import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      {/* LOGO */}
      <Link to="/" className="logo">
        <div className="logo-icon">◎</div>
        <span>Rota Certa</span>
      </Link>

      {/* LINKS */}
      <nav className="nav-links">
        <Link to="/destinos">Destinos</Link>
        <Link to="/experiencias">Experiências</Link>
        <Link to="/sobre">Sobre nós</Link>
        <button className="btn-trip">
          <Link to="/planejar">Planejar viagem</Link>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
