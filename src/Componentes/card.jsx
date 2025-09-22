import { useEffect } from "react";
import { useUser } from "../providers/UserContext";

function Card() {
  const { users, cargarUsuarios, eliminarUsuario, rellenarFormulario } =
    useUser();
  useEffect(() => {
    cargarUsuarios();
  }, []);
  return (
    <div className="flex">
      {users.map((user) => (
        <div className="rounded-2xl m-2 group bg-animated-gradient before:bg-inverse p-3 w-4xl">
          <div className="">
            <div className="flex flex-col items-start m-2">
              <span className="hidden" key={user._id}></span>
              <h2 className="text-4xl">{user.name}</h2>
              <p>{user.email}</p>
              <time>{user.dob.split("T")[0]}</time>
            </div>
            <div className="flex flex-col items-start m-2">
              <h2 className="">Usuario:</h2>
              <p>{user.username}</p>
              <h2 className="">Contraseña: </h2>
              <p className="">*****</p>
            </div>
          </div>
          <div className="opacity-0 flex group-hover:opacity-100 transition-opacity delay-75 duration-300 justify-between">
            <button
              onClick={() => rellenarFormulario(user._id)}
              className="bg-green-700 hover:bg-green-500 cursor-pointer rounded size-10 p-2"
            >
              <span class="material-symbols-outlined">edit</span>
            </button>
            <button
              onClick={() => eliminarUsuario(user._id)}
              className="bg-red-700 hover:bg-red-500 cursor-pointer  rounded size-10 p-2"
            >
              <span class="material-symbols-outlined">delete</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Card;
