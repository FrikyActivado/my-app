import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [lista, setLista] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const Agregar = () => {
    if (nuevaTarea.trim() !== "") {
      const nuevoElemento = {
        id: Date.now(),
        text: nuevaTarea
      };
      setLista([...lista, nuevoElemento]);
      setNuevaTarea("");
    }
  };

  const borrarTarea = (taskId) => {
    const listaActualizada = lista.filter(elemento => elemento.id !== taskId);
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
      <li className="Note">
        <input type="checkbox" />
        <p>{texto}</p>
        <button onClick={() => onDelete(id)}>borrar</button>
      </li>
    </>
  );
}

function AddNote({ nuevaTarea, setNuevaTarea, onAdd }) {
  return (
    <div className="Adder">
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Añadir nueva tarea"
      />
      <button onClick={onAdd}>Agregar</button>
    </div>
  );
}

export default App;
