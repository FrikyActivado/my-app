import React from "react";
export const Login = () => {
  return (
    <>
      <form>
        <label htmlFor="User">Usuario</label>
        <input type="text" name="User" />
        <label htmlFor="Password">Contraseña</label>
        <input type="text" name="Password" />
        <button>Inciar sesion</button>
      </form>
    </>
  );
};
