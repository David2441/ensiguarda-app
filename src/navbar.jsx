import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <img src="/src/assets/logo.png" />
      </div>

      <div className="navbar-links">

        <Link className="nav-item active" to="/">
          Início
        </Link>

        <Link className="nav-item" to="/">
          Horários
        </Link>

        <Link className="nav-item" to="/">
          Reservar Salas
        </Link>

        <Link className="nav-item" to="/">
          Eventos
        </Link>

        <Link className="nav-item" to="/">
          Notificações
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;