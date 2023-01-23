/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

function form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState(null);

  function clearInputs() {
    setName("");
    setAge("");
  }

  async function registerUser() {
    await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify({ name, age }),
    });

    await fetch("/api/form", {
        method: "GET"
    }).then(resp => resp.json()).then((users) => setUsers(users));

    clearInputs();
  }

  function renderUsers() {
    return (
      <>
        {users.map((user, index) => <li key={index}>{JSON.parse(user).name} - {JSON.parse(user).age}</li>)}
      </>
    )
  }

  return (
    <div>
      <h1>Integrando com API #02</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={age}
        min={1}
        onChange={(e) => setAge(Number(e.target.value))}
      />

      <button type="button" onClick={registerUser}>
        Enviar
      </button>

      {users && <ul>{renderUsers()}</ul>} 
    </div>
  );
}

export default form;
