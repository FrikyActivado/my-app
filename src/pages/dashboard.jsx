import Tabla from "../Componentes/tabla";
import { Outlet } from "react-router";
import { UserProvider } from "../providers/UserContext";

function Dashboard() {
  return (
    <UserProvider>
      <Outlet></Outlet>
      <div className="mb-2 flex justify-end">
        <a
          className="bg-gray-700 p-2 rounded-2xl hover:bg-gray-500 cursor-pointer"
          href="/Dashboard/addUser"
        >
          Agregar usuario
        </a>
      </div>
      <Tabla></Tabla>
    </UserProvider>
  );
}
export default Dashboard;
