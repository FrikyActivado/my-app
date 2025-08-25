import React, { useEffect, useState } from "react";

function Crud() {
  const [users, setUsers] = useState([]);
  const [updating, setUpdaing] = useState(false);

  /* GET all users*/
  useEffect(() => {
    fetch("http://localhost:3000/api/users", {
      method: "GET",
    })
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

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

  const eliminarUsuario = (userId) => {
    fetch("http://localhost:3000/api/users/" + userId, {
      method: "DELETE",
    }).then((Response) => {
      if (Response.ok) {
        setUsers(users.filter((user) => user._id !== userId));
      } else {
        alert("error eliminando usuario");
      }
    });
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
        setUpdaing(false);
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

  function indexUsuario(userId) {
    const buscar = (user) => user._id == userId;
    return users.findIndex(buscar);
  }

  const cargarUsuario = (userId) => {
    setUpdaing(true);
    let index = indexUsuario(userId);

    document.querySelector("input[name='Nombre']").value = users[index].name;
    document.querySelector("input[name='Correo']").value = users[index].email;
    document.querySelector("input[name='Fecha']").value =
      users[index].dob.split("T")[0];
    document.querySelector("input[name='User']").value = users[index].username;
    document.querySelector("input[name='Pass']").value = users[index].password;
    document.querySelector("input[name='ID']").value = users[index]._id;
  };

  return (
    <>
      <form onSubmit={updating ? actualizarUsuario : agregarUsuario}>
        <input type="hidden" name="ID" />
        <label htmlFor="Nombre">Nombre</label>
        <input type="text" name="Nombre" required />

        <label htmlFor="email">Email</label>
        <input type="email" name="Correo" required />

        <label htmlFor="date">Fecha de Nacimiento</label>
        <input type="date" name="Fecha" required />

        <div className="subDiv">
          <label htmlFor="User">Nombre de Usuario</label>
          <input type="text" name="User" required />

          <label htmlFor="Pass">Contraseña</label>
          <input type="password" name="Pass" required />
        </div>

        <button type="submit">{updating ? "Actualizar" : "Registrar"}</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Fecha de Nacimiento</th>
            <th>Nombre de Usuario</th>
            <th>Password</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.dob.split("T")[0]}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => cargarUsuario(user._id)}>
                  <span className="material-symbols-outlined">edit</span>
                </button>
              </td>
              <td>
                <button onClick={() => eliminarUsuario(user._id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Crud;
