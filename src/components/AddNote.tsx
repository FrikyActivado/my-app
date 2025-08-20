import Note from "./Note";

function AddNote() {
  return (
    <div className="Adder">
      <input type="text" placeholder="nueva tarea" id="nuevaTarea" />
      <button>Agregar</button>
    </div>
  );
}

function Agregar() {
  let inputTxt = document.getElementById("nuevaTarea");
  document.getElementById("toDo").append(<Note texto={inputTxt.text} />);
}

export default AddNote;
