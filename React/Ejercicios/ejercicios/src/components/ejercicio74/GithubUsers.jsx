import { useEffect, useState } from "react";
import { GithubUser } from "../ejercicio73/GithubUser";

export function GithubUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchGithubUsers = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        const json = await response.json();

        setUsers(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGithubUsers();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h2>Github Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user.login)}>
            {user.login}
          </li>
        ))}
      </ul>
      {selectedUser && <GithubUser user={selectedUser} />}
    </div>
  );
}
