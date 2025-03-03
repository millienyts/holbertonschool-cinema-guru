function Register() {
  return (
    <div>
      <h2>Registrarse</h2>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Crear Cuenta</button>
      </form>
    </div>
  );
}

export default Register;
