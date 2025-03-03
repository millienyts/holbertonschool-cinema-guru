import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>Cinema Guru</h1>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/login">Iniciar Sesión</Link>
        <Link to="/register">Registrarse</Link>
      </div>
    </nav>
  );
}

export default Navbar;
