import { useEffect } from "react";
import { useUser } from "../providers/UserContext";

function Card() {
  const { users, cargarUsuarios, eliminarUsuario, rellenarFormulario } =
    useUser();
  useEffect(() => {
    cargarUsuarios();
  }, []);
  return (
    <div className="grid grid-cols-1">
      {users.map((user) => (
        <div className="flex gap-2 rounded-2xl mt-2 group">
          <div className="grow">
            <div className="flex flex-col items-start  m-2">
              <span className="hidden" key={user._id}></span>
              <h3>
                <strong> Nombre:</strong> {user.name}
              </h3>
              <h3>
                <strong> Correo:</strong> {user.email}
              </h3>
              <h3>
                <strong> Fecha de Nacimiento:</strong> {user.dob.split("T")[0]}
              </h3>
            </div>
            <div className="flex flex-col items-start  m-2">
              <h3>
                <strong>Nombre de Usuario:</strong> {user.username}
              </h3>
              <h3 className="text-wrap wrap-anywhere">
                <strong>Contraseña:</strong> {user.password}
              </h3>
            </div>
          </div>
          <div className=" opacity-0 flex overflow-hidden rounded-br-2xl rounded-tr-2xl group-hover:opacity-100 transition-opacity delay-75 duration-300">
            <button
              onClick={() => rellenarFormulario(user._id)}
              className="bg-green-700 hover:bg-green-500 cursor-pointer p-2"
            >
              <span className="material-symbols-outlined text-white">edit</span>
            </button>
            <button
              onClick={() => eliminarUsuario(user._id)}
              className="bg-red-700 hover:bg-red-500 cursor-pointer"
            >
              Eliminar
            </button>
          </div>
          <div
            class="
    relative group z-0 
    flex gap-2 p-4 rounded-2xl mt-2 text-white
    overflow-hidden
    
    /* 1. Fondo base del div */
    bg-[linear-gradient(var(--color-card))]
    
    /* 2. Creación y posicionamiento del pseudoelemento */
    before:content-[''] 
    before:absolute 
    before:inset-0
    
    /* 3. Estilo del pseudoelemento (el que se mostrará en hover) */
    before:bg-[linear-gradient(var(--color-card-inverse))]
    
    /* 4. Estado inicial y transición */
    before:opacity-0 
    before:transition-opacity 
    before:duration-500
    
    /* 5. Estado durante el hover en el 'group' */
    group-hover:before:opacity-100
    
    /* 6. Z-index para ponerlo detrás del contenido */
    before:z-[-1]
  "
          >
            <span class="relative z-10">Pasa el cursor sobre mí</span>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Card;
