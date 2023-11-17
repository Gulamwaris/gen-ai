import React, { useEffect } from "react";

const USERS_API_URL = "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8";

const App = () => {
  const [users, setUsers] = React.useState([]);
  const [userCity, setUserCity] = React.useState("");

  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(USERS_API_URL);
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const addUser = (name) => {
    if (name.trim() === "") {
      return;
    }

    const newUser = {
      id: users.length + 1,
      name,
    };

    setUsers([...users, newUser]);

    setUserCity("");
  };

  return (
    <div>
      <h1>Users</h1>
      <input
        type="text"
        value={userCity}
        onChange={(e) => setUserCity(e.target.value)}
      />
      <button onClick={() => addUser(userCity)}>Add User</button>
      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default App;