import { useState } from "react";

function ToDo() {
  const [lista, setLista] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const Agregar = () => {
    if (nuevaTarea.trim() !== "") {
      const nuevoElemento = {
        id: Date.now(),
        text: nuevaTarea,
      };
      setLista([...lista, nuevoElemento]);
      setNuevaTarea("");
    }
  };

  const borrarTarea = (taskId) => {
    const listaActualizada = lista.filter((elemento) => elemento.id !== taskId);
    setLista(listaActualizada);
  };

  return (
    <div>
      <AddNote
        nuevaTarea={nuevaTarea}
        setNuevaTarea={setNuevaTarea}
        onAdd={Agregar}
      />

      <ul>
        {lista.map((tarea) => (
          <Note
            key={tarea.id}
            texto={tarea.text}
            id={tarea.id}
            onDelete={borrarTarea}
          />
        ))}
      </ul>
    </div>
  );
}

function Note({ texto, id, onDelete }) {
  return (
    <>
      <li className="flex rounded-md mt-2.5 h-full justify-between pl-2 items-center overflow-hidden border-1 bg-gray-500  hover:bg-gray-700">
        <label className="flex grow items-center">
          <input className="size-5 sr-only peer" type="checkbox" />
          <span className="w-5 h-5 border border-gray-400 bg-white rounded peer-checked:bg-green-500 peer-checked:border-green-600"></span>
          <p className="font-bold uppercase grow ">{texto}</p>
        </label>
        <button
          className="p-2 bg-red-700 hover:bg-red-500 h-full z-10 "
          onClick={() => onDelete(id)}
        >
          Borrar
        </button>
      </li>
    </>
  );
}

function AddNote({ nuevaTarea, setNuevaTarea, onAdd }) {
  return (
    <div className="flex w-full justify-center gap-3">
      <input
        className="rounded-md border-1 border-white p-1 bg-gray-600 text-center grow"
        type="text"
        maxLength={40}
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Añadir nueva tarea"
      />
      <button
        className="bg-blue-950 p-2 rounded-md hover:bg-blue-700"
        onClick={onAdd}
      >
        Agregar
      </button>
    </div>
  );
}

export default ToDo;
