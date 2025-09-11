import React from "react";
import { Link, Outlet } from "react-router";
function Home() {
  return (
    <>
      <nav className="w-full">
        <div className="w-full flex justify-around">
          <a className="w-full rounded-tl-2xl hover:bg-blue-900" href="/todo">
            <div>Lista de tareas</div>
          </a>
          <a className="w-full hover:bg-blue-900" href="/form">
            <div>Formulario</div>
          </a>
          <a
            className="w-full rounded-tr-2xl hover:bg-blue-900 "
            href="/dashboard"
          >
            <div>Dashboard</div>
          </a>
        </div>
      </nav>
      <hr className="mt-2" />
      <div className="mt-10 w-full">
        <Outlet></Outlet>
      </div>
    </>
  );
}
export default Home;
