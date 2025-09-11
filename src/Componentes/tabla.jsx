import { useEffect } from "react";
import { useUser } from "../providers/UserContext";

export function Tabla() {
  const { users, cargarUsuarios, eliminarUsuario, rellenarFormulario } =
    useUser();
  useEffect(() => {
    cargarUsuarios();
  }, []);
  return (
    <>
      <div className="overflow-hidden rounded-2xl w-full">
        <table className="bg-gray-700 border-collapse w-full">
          <thead>
            <tr className="bg-blue-950">
              <th className="border-r-2 px-2">Nombre</th>
              <th className="border-r-2 px-2">Correo</th>
              <th className="border-r-2 px-2">Fecha de Nacimiento</th>
              <th className="border-r-2 px-2">Nombre de Usuario</th>
              <th className="border-r-2 px-2">Password</th>
              <th className="border-r-2 px-2">Editar</th>
              <th className="px-2">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="bg-gray-700 hover:bg-gray-900 border-b-1 border-gray-300"
              >
                <td className="border-r-2 px-2">{user.name}</td>
                <td className="border-r-2 px-2">{user.email}</td>
                <td className="border-r-2 px-2">{user.dob.split("T")[0]}</td>
                <td className="border-r-2 px-2">{user.username}</td>
                <td className="border-r-2 px-2">{user.password}</td>
                <td className="border-r-2 px-2">
                  <button
                    onClick={() => rellenarFormulario(user._id)}
                    className=" cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-green-700">
                      edit
                    </span>
                  </button>
                </td>
                <td className="p-0 h-9 flex items-stretch">
                  <button
                    onClick={() => eliminarUsuario(user._id)}
                    className="bg-red-700 hover:bg-red-500 w-full h-full cursor-pointer"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {users.length === 0 && (
          <div className="bg-gray-700 hover:bg-gray-900 border-b-1 border-gray-300">
            sin registros
          </div>
        )}
      </div>
    </>
  );
}
export default Tabla;
