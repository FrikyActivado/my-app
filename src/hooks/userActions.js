import { useState } from "react";

export const useUserActions = () => {
  const [users, setUsers] = useState([]);
  const [updating, setUpdating] = useState(false);

  const agregarUsuario = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const nuevoUsuario = Object.fromEntries(formData.entries());

    const usuarioConNombresCorrectos = {
      name: nuevoUsuario.Nombre,
      email: nuevoUsuario.Correo,
      dob: nuevoUsuario.Fecha,
      username: nuevoUsuario.User,
      password: nuevoUsuario.Pass,
    };

    fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioConNombresCorrectos), // Convertimos el objeto a JSON
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("error agregando usuario");
        }
      })
      .then((data) => {
        setUsers([...users, data]);
        e.target.reset();
      });
  };

  const cargarUsuarios = () => {
    fetch("http://localhost:3000/api/users", {
      method: "GET",
    })
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  const eliminarUsuario = (userId) => {
    fetch("http://localhost:3000/api/users/" + userId, {
      method: "DELETE",
    }).then((Response) => {
      if (Response.ok) {
        setUsers(users.filter((user) => user._id !== userId));
        cargarUsuarios();
      } else {
        alert("error eliminando usuario");
      }
    });
    return {
      users,
    };
  };

  const actualizarUsuario = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const nuevoUsuario = Object.fromEntries(formData.entries());

    const usuarioConNombresCorrectos = {
      name: nuevoUsuario.Nombre,
      email: nuevoUsuario.Correo,
      dob: nuevoUsuario.Fecha,
      username: nuevoUsuario.User,
      password: nuevoUsuario.Pass,
    };

    fetch("http://localhost:3000/api/users/" + nuevoUsuario.ID, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioConNombresCorrectos), // Convertimos el objeto a JSON
    }).then((response) => {
      if (response.ok) {
        setUpdating(false);
        let usersCopy = users;
        let index = indexUsuario(nuevoUsuario.ID);
        usersCopy[index] = usuarioConNombresCorrectos;
        setUsers([...usersCopy]);
        e.target.reset();
      } else {
        alert("error actualizando usuario");
      }
    });
  };

  const indexUsuario = (userId) => {
    const buscar = (user) => user._id == userId;
    return users.findIndex(buscar);
  };

  const rellenarFormulario = (userId) => {
    setUpdating(true);
    let index = indexUsuario(userId);
    document.querySelector("input[name='Nombre']").value = users[index].name;
    document.querySelector("input[name='Correo']").value = users[index].email;
    document.querySelector("input[name='Fecha']").value =
      users[index].dob.split("T")[0];
    document.querySelector("input[name='User']").value = users[index].username;
    document.querySelector("input[name='Pass']").value = users[index].password;
    document.querySelector("input[name='ID']").value = users[index]._id;
  };

  return {
    users,
    updating,
    setUsers,
    agregarUsuario,
    cargarUsuarios,
    eliminarUsuario,
    actualizarUsuario,
    indexUsuario,
    rellenarFormulario,
  };
};
