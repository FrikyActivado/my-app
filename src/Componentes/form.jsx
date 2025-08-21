import { useReducer } from "react";

// Estado inicial: un objeto con un array de usuarios vacío
const InitState = {
  usuarios: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      // El reducer siempre debe devolver un nuevo objeto de estado
      return {
        ...state,
        usuarios: [...state.usuarios, action.payload],
      };
    case "DELETE_USER":
      // Filtra el usuario que se va a eliminar basándose en el nombre de usuario
      return {
        ...state,
        usuarios: state.usuarios.filter(
          (user) => user.userName !== action.payload
        ),
      };
    default:
      return state;
  }
}

function Formulario() {
  const [state, dispatch] = useReducer(reducer, InitState);

  const agregarUsuario = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const nuevoUsuario = Object.fromEntries(formData.entries());

    const usuarioConNombresCorrectos = {
      nombre: nuevoUsuario.Nombre,
      correo: nuevoUsuario.Correo,
      fecha: nuevoUsuario.Fecha,
      userName: nuevoUsuario.User,
      pass: nuevoUsuario.Pass,
    };

    dispatch({ type: "ADD_USER", payload: usuarioConNombresCorrectos });
    e.target.reset();
  };

  const eliminarUsuario = (userName) => {
    dispatch({ type: "DELETE_USER", payload: userName });
  };

  return (
    <>
      <form onSubmit={agregarUsuario}>
        <label htmlFor="Nombre">Nombre</label>
        <input type="text" name="Nombre" required />

        <label htmlFor="email">Email</label>
        <input type="email" name="Correo" required />

        <label htmlFor="date">Fecha de Nacimiento</label>
        <input type="date" name="Fecha" required />

        <div className="subDiv">
          <label htmlFor="User">Nombre de Usuario</label>
          <input type="text" name="User" required />

          <label htmlFor="Pass">Contraseña</label>
          <input type="password" name="Pass" required />
        </div>

        <button type="submit">Registrar</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Fecha de Nacimiento</th>
            <th>Nombre de Usuario</th>
            <th>Password</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {state.usuarios.map((user, index) => (
            <tr key={index}>
              <td>{user.nombre}</td>
              <td>{user.correo}</td>
              <td>{user.fecha}</td>
              <td>{user.userName}</td>
              <td>***</td>
              <td>
                <button onClick={() => eliminarUsuario(user.userName)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Formulario;
