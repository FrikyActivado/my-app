//import { useUserActions } from "../hooks/userActions";
import { useUser } from "../providers/UserContext";
function Formulario() {
  //const { updating, actualizarUsuario, agregarUsuario } = useUserActions();
  const { agregarUsuario, actualizarUsuario, updating } = useUser();
  return (
    <>
      <form
        onSubmit={updating ? actualizarUsuario : agregarUsuario}
        className="flex flex-col"
      >
        <div className="flex flex-col grow">
          <input type="hidden" name="ID" />
          <label htmlFor="Nombre" className="my-2">
            Nombre
          </label>
          <input
            type="text"
            name="Nombre"
            id="Nombre"
            className="border-gray-400 border-2 rounded-xl bg-gray-700 text-center"
            required
          />

          <label htmlFor="email" className="my-2">
            Email
          </label>
          <input
            type="email"
            name="Correo"
            id="email"
            autoComplete="email"
            className="border-gray-400 border-2 rounded-xl bg-gray-700 text-center
          "
            required
          />

          <label htmlFor="date" className="my-2">
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            name="Fecha"
            id="date"
            className="border-gray-400 border-2 rounded-xl bg-gray-700  placeholder:text-center text-center
          "
            required
          />

          <label htmlFor="User" className="my-2">
            Nombre de Usuario
          </label>
          <input
            type="text"
            name="User"
            id="User"
            className="border-gray-400 border-2 rounded-xl bg-gray-700 text-center
            "
            required
          />

          <label htmlFor="Pass" className="my-2">
            Contraseña
          </label>
          <input
            type="password"
            name="Pass"
            id="Pass"
            className="border-gray-400 border-2 rounded-xl bg-gray-700 text-center
            "
            required
          />

          <button
            type="submit"
            className={
              updating
                ? "cursor-pointer my-2 rounded-xl p-2 bg-green-900 hover:bg-green-500"
                : "cursor-pointer my-2 rounded-xl p-2 bg-blue-900 hover:bg-blue-500"
            }
          >
            {updating ? "Actualizar" : "Registrar"}
          </button>
        </div>
      </form>
    </>
  );
}
export default Formulario;
