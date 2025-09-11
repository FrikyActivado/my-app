import { createContext, useContext, useState, useEffect } from "react";
import { useUserActions } from "../hooks/userActions"; // Importa tu hook de acciones

// 1. Crear el Contexto
/**
 * createContext() regresa dos componentes Provider y Consumer
 */
//se inicializa en null para que cuando un compnente que NO esté en el contexto y lo intente usar no reciba un undefined y de error.
export const UserContext = createContext(null);

// 2. Crear el Provider
export const UserProvider = ({ children }) => {
  const {
    users,
    setUsers,
    cargarUsuarios,
    agregarUsuario,
    eliminarUsuario,
    actualizarUsuario,
    updating,
    setUpdating,
    rellenarFormulario,
    indexUsuario,
  } = useUserActions(); // Usa tu hook aquí para centralizar la lógica

  // 3. Crear el objeto de valor que se compartirá
  const value = {
    users,
    cargarUsuarios,
    agregarUsuario,
    eliminarUsuario,
    actualizarUsuario,
    updating,
    setUpdating,
    rellenarFormulario,
    indexUsuario,
  };

  // 4. Envolver la aplicación con el Provider
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// 5. Crear un hook personalizado para consumir el contexto
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser debe ser usado dentro de un UserProvider");
  }
  return context;
};
