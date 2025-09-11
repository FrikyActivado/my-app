import ToDo from "./Componentes/toDo";
import Crud from "./Componentes/crud";
import Formulario from "./Componentes/form";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import AddUser from "./pages/addUser";

import { Route, Routes } from "react-router";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/Form" element={<Formulario />} />
          <Route path="/toDo" element={<ToDo />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="/Dashboard/addUser" element={<AddUser />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
